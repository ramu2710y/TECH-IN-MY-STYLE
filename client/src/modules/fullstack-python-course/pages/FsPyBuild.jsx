import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'blog-api',
    title: 'Blog API',
    icon: 'fa-pen-nib',
    description: 'Full CRUD REST API with authentication, pagination, and categories.',
    tech: ['Flask', 'SQLAlchemy', 'JWT', 'PostgreSQL'],
    structure: `blog-api/
+-- app/
|   +-- __init__.py
|   +-- models/
|   |   +-- user.py
|   |   +-- post.py
|   +-- routes/
|   |   +-- auth.py
|   |   +-- posts.py
|   +-- utils/
|       +-- decorators.py
+-- config.py
+-- requirements.txt
+-- Dockerfile`,
    howItWorks: 'Flask Blueprints keep routes modular. SQLAlchemy ORM handles DB. JWT secures endpoints. Pagination prevents large payloads.',
    files: [
      { name: '__init__.py', content: `from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
jwt = JWTManager()

def create_app(config="config.Config"):
    app = Flask(__name__)
    app.config.from_object(config)
    db.init_app(app)
    jwt.init_app(app)
    from .routes.auth import auth_bp
    from .routes.posts import posts_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(posts_bp, url_prefix="/api")
    return app` },
      { name: 'user.py', content: `from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200))
    posts = db.relationship('Post', backref='author', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)` },
      { name: 'post.py', content: `from app import db
from datetime import datetime

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)` },
      { name: 'auth.py', content: `from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app import db
from app.models.user import User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User(username=data['username'], email=data['email'])
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and user.check_password(data['password']):
        token = create_access_token(identity=user.id)
        return jsonify({'token': token})
    return jsonify({'error': 'Invalid credentials'}), 401` },
      { name: 'posts.py', content: `from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.models.post import Post

posts_bp = Blueprint('posts', __name__)

@posts_bp.route('/posts', methods=['GET'])
def get_posts():
    page = request.args.get('page', 1, type=int)
    posts = Post.query.paginate(page=page, per_page=10)
    return jsonify({
        'posts': [{'id': p.id, 'title': p.title} for p in posts.items],
        'total': posts.total
    })

@posts_bp.route('/posts', methods=['POST'])
@jwt_required()
def create_post():
    data = request.get_json()
    post = Post(title=data['title'], content=data['content'], 
                user_id=get_jwt_identity())
    db.session.add(post)
    db.session.commit()
    return jsonify({'id': post.id}), 201` },
      { name: 'config.py', content: `import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://user:pass@localhost/blog')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET', 'dev-secret-key')` },
      { name: 'Dockerfile', content: `FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["flask", "run", "--host=0.0.0.0"]` },
    ],
  },
  {
    id: 'ecommerce-api',
    title: 'E-commerce API',
    icon: 'fa-shopping-cart',
    description: 'Scalable REST API with products, cart, orders, and Stripe payments.',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Stripe'],
    structure: `ecommerce-api/
+-- app/
|   +-- main.py
|   +-- models/
|   |   +-- product.py
|   |   +-- order.py
|   +-- routes/
|   |   +-- products.py
|   |   +-- cart.py
|   |   +-- orders.py
|   +-- services/
|       +-- payment.py
+-- config.py
+-- requirements.txt
+-- docker-compose.yml`,
    howItWorks: 'FastAPI async endpoints for speed. Redis caches cart data. Stripe handles payments. PostgreSQL stores orders.',
    files: [
      { name: 'main.py', content: `from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import products, cart, orders

app = FastAPI(title="E-commerce API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router, prefix="/api/products", tags=["products"])
app.include_router(cart.router, prefix="/api/cart", tags=["cart"])
app.include_router(orders.router, prefix="/api/orders", tags=["orders"])

@app.get("/")
def root():
    return {"message": "E-commerce API", "version": "1.0.0"}` },
      { name: 'product.py', content: `from sqlalchemy import Column, Integer, String, Float, Text
from app.database import Base

class Product(Base):
    __tablename__ = "products"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), index=True, nullable=False)
    description = Column(Text)
    price = Column(Float, nullable=False)
    stock = Column(Integer, default=0)
    category = Column(String(100), index=True)
    image_url = Column(String(500))
    
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "stock": self.stock,
            "category": self.category,
            "image_url": self.image_url
        }` },
      { name: 'order.py', content: `from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class Order(Base):
    __tablename__ = "orders"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=False)
    total = Column(Float, nullable=False)
    status = Column(String(50), default="pending")
    payment_intent_id = Column(String(200))
    created_at = Column(DateTime, default=datetime.utcnow)
    items = relationship("OrderItem", back_populates="order")

class OrderItem(Base):
    __tablename__ = "order_items"
    
    id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    product_id = Column(Integer, nullable=False)
    quantity = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)
    order = relationship("Order", back_populates="items")` },
      { name: 'products.py', content: `from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.product import Product
from pydantic import BaseModel

router = APIRouter()

class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    stock: int
    category: str

@router.get("/")
async def get_products(
    skip: int = 0,
    limit: int = 20,
    category: str = None,
    db: Session = Depends(get_db)
):
    query = db.query(Product)
    if category:
        query = query.filter(Product.category == category)
    products = query.offset(skip).limit(limit).all()
    return [p.to_dict() for p in products]

@router.get("/{product_id}")
async def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product.to_dict()

@router.post("/")
async def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    db_product = Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product.to_dict()` },
      { name: 'cart.py', content: `from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
import redis.asyncio as redis
import json

router = APIRouter()

redis_client = redis.Redis(host='localhost', port=6379, decode_responses=True)

class CartItem(BaseModel):
    product_id: int
    quantity: int

@router.post("/add")
async def add_to_cart(item: CartItem, user_id: int = 1):
    cart_key = f"cart:{user_id}"
    await redis_client.hset(cart_key, item.product_id, item.quantity)
    return {"message": "Item added to cart"}

@router.get("/")
async def get_cart(user_id: int = 1):
    cart_key = f"cart:{user_id}"
    cart = await redis_client.hgetall(cart_key)
    return {
        "items": [
            {"product_id": int(k), "quantity": int(v)} 
            for k, v in cart.items()
        ]
    }

@router.delete("/{product_id}")
async def remove_from_cart(product_id: int, user_id: int = 1):
    cart_key = f"cart:{user_id}"
    await redis_client.hdel(cart_key, product_id)
    return {"message": "Item removed from cart"}` },
      { name: 'orders.py', content: `from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.order import Order, OrderItem
from app.services.payment import create_payment_intent
from pydantic import BaseModel
from typing import List

router = APIRouter()

class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int
    price: float

class OrderCreate(BaseModel):
    items: List[OrderItemCreate]

@router.post("/")
async def create_order(order: OrderCreate, user_id: int = 1, db: Session = Depends(get_db)):
    total = sum(item.price * item.quantity for item in order.items)
    
    # Create Stripe payment intent
    payment_intent = await create_payment_intent(total)
    
    # Create order
    db_order = Order(
        user_id=user_id,
        total=total,
        payment_intent_id=payment_intent["id"]
    )
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    
    # Add order items
    for item in order.items:
        db_item = OrderItem(
            order_id=db_order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price=item.price
        )
        db.add(db_item)
    db.commit()
    
    return {
        "order_id": db_order.id,
        "client_secret": payment_intent["client_secret"]
    }

@router.get("/{order_id}")
async def get_order(order_id: int, db: Session = Depends(get_db)):
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order` },
      { name: 'payment.py', content: `import stripe
import os

stripe.api_key = os.getenv("STRIPE_SECRET_KEY", "sk_test_...")

async def create_payment_intent(amount: float):
    """Create a Stripe payment intent"""
    intent = stripe.PaymentIntent.create(
        amount=int(amount * 100),  # Convert to cents
        currency="usd",
        automatic_payment_methods={"enabled": True},
    )
    return {
        "id": intent.id,
        "client_secret": intent.client_secret
    }

async def confirm_payment(payment_intent_id: str):
    """Confirm a payment intent"""
    intent = stripe.PaymentIntent.retrieve(payment_intent_id)
    return intent.status == "succeeded"` },
      { name: 'docker-compose.yml', content: `version: '3.8'

services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/ecommerce
      - REDIS_URL=redis://redis:6379
      - STRIPE_SECRET_KEY=\${STRIPE_SECRET_KEY}
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=ecommerce
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:` },
    ],
  },
  {
    id: 'chat-app',
    title: 'Real-time Chat',
    icon: 'fa-comments',
    description: 'WebSocket chat with rooms, Redis pub/sub, and message history.',
    tech: ['FastAPI', 'WebSockets', 'Redis', 'React'],
    structure: `chat-app/
+-- backend/
|   +-- main.py
|   +-- websocket.py
|   +-- redis_client.py
+-- frontend/
|   +-- src/
|       +-- ChatRoom.jsx
|       +-- useWebSocket.js
+-- docker-compose.yml`,
    howItWorks: 'WebSocket maintains persistent connections. Redis pub/sub broadcasts messages across servers. React frontend handles UI.',
    files: [
      { name: 'main.py', content: `from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import Dict, List
import json
import redis.asyncio as redis

app = FastAPI()

redis_client = redis.Redis(host='localhost', port=6379, decode_responses=True)

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, List[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, room: str):
        await websocket.accept()
        if room not in self.active_connections:
            self.active_connections[room] = []
        self.active_connections[room].append(websocket)

    def disconnect(self, websocket: WebSocket, room: str):
        if room in self.active_connections:
            self.active_connections[room].remove(websocket)

    async def broadcast(self, message: str, room: str):
        for connection in self.active_connections.get(room, []):
            await connection.send_text(message)

manager = ConnectionManager()

@app.websocket("/ws/{room}/{user_id}")
async def websocket_endpoint(websocket: WebSocket, room: str, user_id: str):
    await manager.connect(websocket, room)
    
    # Subscribe to Redis channel
    pubsub = redis_client.pubsub()
    await pubsub.subscribe(f"room:{room}")
    
    try:
        while True:
            data = await websocket.receive_text()
            message = json.loads(data)
            
            # Publish to Redis
            await redis_client.publish(
                f"room:{room}",
                json.dumps({"user": user_id, "message": message["text"]})
            )
            
            # Save to history
            await redis_client.lpush(
                f"history:{room}",
                json.dumps({"user": user_id, "message": message["text"]})
            )
            
    except WebSocketDisconnect:
        manager.disconnect(websocket, room)
        await manager.broadcast(
            json.dumps({"user": "system", "message": f"{user_id} left"}),
            room
        )

@app.get("/history/{room}")
async def get_history(room: str, limit: int = 50):
    messages = await redis_client.lrange(f"history:{room}", 0, limit - 1)
    return [json.loads(msg) for msg in messages]` },
      { name: 'redis_client.py', content: `import redis.asyncio as redis
import os

class RedisClient:
    def __init__(self):
        self.redis = redis.Redis(
            host=os.getenv('REDIS_HOST', 'localhost'),
            port=int(os.getenv('REDIS_PORT', 6379)),
            decode_responses=True
        )
    
    async def publish(self, channel: str, message: str):
        await self.redis.publish(channel, message)
    
    async def subscribe(self, channel: str):
        pubsub = self.redis.pubsub()
        await pubsub.subscribe(channel)
        return pubsub
    
    async def save_message(self, room: str, message: dict):
        await self.redis.lpush(f"history:{room}", json.dumps(message))
        await self.redis.ltrim(f"history:{room}", 0, 99)  # Keep last 100
    
    async def get_history(self, room: str, limit: int = 50):
        messages = await self.redis.lrange(f"history:{room}", 0, limit - 1)
        return [json.loads(msg) for msg in messages]

redis_client = RedisClient()` },
      { name: 'ChatRoom.jsx', content: `import { useState, useEffect } from 'react';
import useWebSocket from './useWebSocket';

export default function ChatRoom({ room, userId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { sendMessage, lastMessage, connectionStatus } = useWebSocket(
    \`ws://localhost:8000/ws/\${room}/\${userId}\`
  );

  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage.data);
      setMessages(prev => [...prev, data]);
    }
  }, [lastMessage]);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(JSON.stringify({ text: input }));
      setInput('');
    }
  };

  return (
    <div className="chat-room">
      <div className="status">
        Status: {connectionStatus}
      </div>
      
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={\`message \${msg.user === userId ? 'own' : ''}\`}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}` },
      { name: 'useWebSocket.js', content: `import { useState, useEffect, useRef } from 'react';

export default function useWebSocket(url) {
  const [lastMessage, setLastMessage] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Connecting');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      setConnectionStatus('Connected');
    };

    ws.current.onmessage = (event) => {
      setLastMessage(event);
    };

    ws.current.onerror = () => {
      setConnectionStatus('Error');
    };

    ws.current.onclose = () => {
      setConnectionStatus('Disconnected');
    };

    return () => {
      ws.current?.close();
    };
  }, [url]);

  const sendMessage = (message) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(message);
    }
  };

  return { sendMessage, lastMessage, connectionStatus };
}` },
      { name: 'docker-compose.yml', content: `version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    depends_on:
      - redis

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_WS_URL=ws://localhost:8000

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  redis_data:` },
    ],
  },
  {
    id: 'microservices',
    title: 'Microservices Stack',
    icon: 'fa-network-wired',
    description: 'Multi-service architecture with Docker, Kubernetes, and CI/CD.',
    tech: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
    structure: `microservices/
+-- services/
|   +-- auth-service/
|   |   +-- main.py
|   |   +-- Dockerfile
|   +-- api-gateway/
|   |   +-- main.py
|   |   +-- Dockerfile
|   +-- product-service/
|       +-- main.py
|       +-- Dockerfile
+-- k8s/
|   +-- auth-deployment.yaml
|   +-- gateway-deployment.yaml
|   +-- product-deployment.yaml
+-- .github/
    +-- workflows/
        +-- deploy.yml`,
    howItWorks: 'Each service runs in Docker. Kubernetes orchestrates containers. GitHub Actions automates deployment to AWS EKS.',
    files: [
      { name: 'auth-service/main.py', content: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from jose import JWTError, jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta

app = FastAPI(title="Auth Service")

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserLogin(BaseModel):
    username: str
    password: str

@app.post("/login")
async def login(user: UserLogin):
    # Verify user (simplified)
    if user.username == "admin" and user.password == "admin":
        token = create_access_token({"sub": user.username})
        return {"access_token": token, "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/verify")
async def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return {"valid": True, "user": payload.get("sub")}
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(hours=24)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

@app.get("/health")
async def health():
    return {"status": "healthy"}` },
      { name: 'api-gateway/main.py', content: `from fastapi import FastAPI, Request, HTTPException
import httpx

app = FastAPI(title="API Gateway")

AUTH_SERVICE = "http://auth-service:8001"
PRODUCT_SERVICE = "http://product-service:8002"

@app.middleware("http")
async def auth_middleware(request: Request, call_next):
    if request.url.path.startswith("/api/"):
        token = request.headers.get("Authorization")
        if not token:
            raise HTTPException(status_code=401, detail="No token provided")
        
        # Verify token with auth service
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{AUTH_SERVICE}/verify",
                params={"token": token.replace("Bearer ", "")}
            )
            if response.status_code != 200:
                raise HTTPException(status_code=401, detail="Invalid token")
    
    return await call_next(request)

@app.api_route("/api/products/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def proxy_products(path: str, request: Request):
    async with httpx.AsyncClient() as client:
        response = await client.request(
            method=request.method,
            url=f"{PRODUCT_SERVICE}/{path}",
            headers=dict(request.headers),
            content=await request.body()
        )
        return response.json()

@app.post("/auth/login")
async def login(request: Request):
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{AUTH_SERVICE}/login",
            content=await request.body()
        )
        return response.json()

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "api-gateway"}` },
      { name: 'product-service/main.py', content: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Product Service")

# In-memory database (use real DB in production)
products_db = [
    {"id": 1, "name": "Laptop", "price": 999.99, "stock": 10},
    {"id": 2, "name": "Mouse", "price": 29.99, "stock": 50},
]

class Product(BaseModel):
    name: str
    price: float
    stock: int

@app.get("/products")
async def get_products():
    return products_db

@app.get("/products/{product_id}")
async def get_product(product_id: int):
    product = next((p for p in products_db if p["id"] == product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.post("/products")
async def create_product(product: Product):
    new_id = max(p["id"] for p in products_db) + 1
    new_product = {"id": new_id, **product.dict()}
    products_db.append(new_product)
    return new_product

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "product-service"}` },
      { name: 'Dockerfile', content: `FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]` },
      { name: 'auth-deployment.yaml', content: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
  labels:
    app: auth-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: auth-service
  template:
    metadata:
      labels:
        app: auth-service
    spec:
      containers:
      - name: auth-service
        image: myregistry/auth-service:latest
        ports:
        - containerPort: 8001
        env:
        - name: SECRET_KEY
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: jwt-secret
        livenessProbe:
          httpGet:
            path: /health
            port: 8001
          initialDelaySeconds: 10
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: auth-service
spec:
  selector:
    app: auth-service
  ports:
  - port: 8001
    targetPort: 8001
  type: ClusterIP` },
      { name: 'gateway-deployment.yaml', content: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-gateway
  labels:
    app: api-gateway
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-gateway
  template:
    metadata:
      labels:
        app: api-gateway
    spec:
      containers:
      - name: api-gateway
        image: myregistry/api-gateway:latest
        ports:
        - containerPort: 8000
        env:
        - name: AUTH_SERVICE
          value: "http://auth-service:8001"
        - name: PRODUCT_SERVICE
          value: "http://product-service:8002"
---
apiVersion: v1
kind: Service
metadata:
  name: api-gateway
spec:
  selector:
    app: api-gateway
  ports:
  - port: 80
    targetPort: 8000
  type: LoadBalancer` },
      { name: 'deploy.yml', content: `name: Deploy to EKS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1
    
    - name: Build and push Docker images
      env:
        ECR_REGISTRY: \${{ steps.login-ecr.outputs.registry }}
      run: |
        docker build -t \$ECR_REGISTRY/auth-service:latest ./services/auth-service
        docker push \$ECR_REGISTRY/auth-service:latest
        
        docker build -t \$ECR_REGISTRY/api-gateway:latest ./services/api-gateway
        docker push \$ECR_REGISTRY/api-gateway:latest
        
        docker build -t \$ECR_REGISTRY/product-service:latest ./services/product-service
        docker push \$ECR_REGISTRY/product-service:latest
    
    - name: Update kubeconfig
      run: |
        aws eks update-kubeconfig --name my-cluster --region us-east-1
    
    - name: Deploy to Kubernetes
      run: |
        kubectl apply -f k8s/
        kubectl rollout status deployment/api-gateway
        kubectl rollout status deployment/auth-service
        kubectl rollout status deployment/product-service` },
    ],
  },
];

export default function FsPyBuild() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  const toggleProject = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
      if (!activeTab[projectId]) {
        setActiveTab({ ...activeTab, [projectId]: 0 });
      }
    }
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div style={{ paddingTop: 62, minHeight: '100vh' }}>
      
      {/* HEADER */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'linear-gradient(135deg, var(--accent-light), var(--mac-surface))', borderBottom: '1px solid var(--mac-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'var(--accent-light)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Build Real-World <span style={{ color: 'var(--accent)' }}>Projects</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 700 }}>
              Four production-grade projects. Full source code. Real architecture. Ship it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: '4rem 1.5rem 6rem', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, i) => {
            const isExpanded = expandedProject === project.id;
            const currentTab = activeTab[project.id] || 0;
            
            return (
              <motion.div key={project.id}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="mac-card"
                style={{ padding: 0, overflow: 'hidden' }}>
                
                {/* PROJECT HEADER */}
                <div style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`fas ${project.icon}`} style={{ color: 'var(--accent)', fontSize: '1.5rem' }} />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {project.tech.map(tech => (
                        <div key={tech} className="mac-tag" style={{ fontSize: '0.75rem', background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>
                          {tech}
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      className="mac-btn mac-btn-secondary"
                      onClick={() => toggleProject(project.id)}
                      style={{ fontSize: '0.85rem' }}>
                      <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`} style={{ fontSize: '0.75rem' }} />
                      {isExpanded ? 'Collapse' : 'Explore Project'}
                    </button>
                  </div>
                </div>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ borderTop: '1px solid var(--mac-border)', overflow: 'hidden' }}>
                      
                      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {/* PROJECT STRUCTURE */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <i className="fas fa-folder-tree" style={{ color: 'var(--accent)' }} />
                            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                              PROJECT STRUCTURE
                            </h4>
                          </div>
                          <pre style={{ background: 'var(--mac-surface-2)', padding: '1rem', borderRadius: 10, fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--text-secondary)', overflow: 'auto', fontFamily: 'SF Mono, Menlo, monospace' }}>
                            {project.structure}
                          </pre>
                        </div>

                        {/* HOW IT WORKS */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <i className="fas fa-lightbulb" style={{ color: 'var(--accent)' }} />
                            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                              HOW IT WORKS
                            </h4>
                          </div>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                            {project.howItWorks}
                          </p>
                        </div>
                      </div>

                      {/* CODE TABS */}
                      {project.files && project.files.length > 0 && (
                        <div style={{ padding: '0 2rem 2rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <i className="fas fa-code" style={{ color: 'var(--accent)' }} />
                            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                              FULL PROJECT CODE — {project.files.length} FILES
                            </h4>
                          </div>
                          
                          <div className="mac-window">
                            <div className="mac-titlebar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div className="mac-dot" style={{ background: 'var(--red-dot)' }} />
                                <div className="mac-dot" style={{ background: 'var(--yellow-dot)' }} />
                                <div className="mac-dot" style={{ background: 'var(--green-dot)' }} />
                              </div>
                              <button 
                                onClick={() => copyCode(project.files[currentTab].content)}
                                style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, padding: '4px 8px', borderRadius: 6 }}
                                onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.1)'}
                                onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                                <i className="fas fa-copy" />
                                Copy
                              </button>
                            </div>
                            
                            {/* FILE TABS */}
                            <div style={{ display: 'flex', gap: 0, background: 'var(--mac-surface-2)', borderBottom: '1px solid var(--mac-border)', overflowX: 'auto' }}>
                              {project.files.map((file, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setActiveTab({ ...activeTab, [project.id]: idx })}
                                  style={{
                                    padding: '0.75rem 1.25rem',
                                    background: currentTab === idx ? 'var(--mac-surface)' : 'transparent',
                                    border: 'none',
                                    borderBottom: currentTab === idx ? '2px solid var(--accent)' : '2px solid transparent',
                                    color: currentTab === idx ? 'var(--accent)' : 'var(--text-tertiary)',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    fontFamily: 'SF Mono, Menlo, monospace',
                                    transition: 'all 0.15s'
                                  }}>
                                  <i className="fas fa-file-code" style={{ marginRight: 6, fontSize: '0.7rem' }} />
                                  {file.name}
                                </button>
                              ))}
                            </div>
                            
                            {/* CODE CONTENT */}
                            <pre style={{ margin: 0, padding: '1.5rem', background: '#1e1e1e', color: '#d4d4d4', fontSize: '0.8rem', lineHeight: 1.6, overflow: 'auto', maxHeight: 500, fontFamily: 'SF Mono, Menlo, monospace' }}>
                              <code>{project.files[currentTab].content}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
