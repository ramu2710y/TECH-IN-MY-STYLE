// Full Stack Java in My Style - Complete Course Data

export const systemModules = [
  { id: 'core-java', title: 'Core Java Engine', icon: '⚙️', color: '#f89820' },
  { id: 'spring-boot', title: 'Spring Boot System', icon: '🚀', color: '#6db33f' },
  { id: 'database', title: 'Database Layer', icon: '🗄️', color: '#5382a1' },
  { id: 'security', title: 'Security Module', icon: '🔐', color: '#ff9f1c' },
  { id: 'microservices', title: 'Microservices Architecture', icon: '🔗', color: '#39ff14' },
  { id: 'deployment', title: 'Deployment System', icon: '📡', color: '#5382a1' },
]

export const phases = [
  {
    id: 'phase1',
    phase: 'PHASE 1',
    title: 'Core Java Engine',
    color: '#f89820',
    level: 'Beginner',
    topics: [
      {
        id: 'java-basics',
        title: 'Java Basics',
        description: 'Variables, data types, operators, control flow',
        analogy: 'Java basics are like the CPU instruction set — every complex operation breaks down to primitives.',
        sections: [
          { title: 'Data Types', content: 'Primitive types store actual values in memory. Reference types store memory addresses.', points: ['byte, short, int, long (integer types)', 'float, double (decimal numbers)', 'boolean (true/false)', 'char (single character)', 'String (sequence of characters)'] },
          { title: 'Operators', content: 'Operators perform operations on variables and values.', points: ['Arithmetic: +, -, *, /, %', 'Comparison: ==, !=, >, <, >=, <=', 'Logical: &&, ||, !', 'Bitwise: &, |, ^, ~, <<, >>'] },
          { title: 'Control Flow', content: 'Control flow determines which code executes based on conditions.', points: ['if/else statements: conditional execution', 'switch statements: multiple conditions', 'for loops: iterate fixed number of times', 'while/do-while: iterate until condition is false', 'try/catch: handle exceptions'] },
        ],
        code: `public class JavaBasics {\n  public static void main(String[] args) {\n    int x = 10;\n    String name = "Java";\n    if (x > 5) {\n      System.out.println("Hello " + name);\n    }\n    for (int i = 0; i < 3; i++) {\n      System.out.println(i);\n    }\n  }\n}`,
        interview: [
          { q: 'JDK vs JRE vs JVM?', a: 'JVM executes bytecode. JRE = JVM + libraries. JDK = JRE + tools.' },
          { q: 'Pass-by-value or reference?', a: 'Java is pass-by-value. For objects, the reference address is copied.' },
        ],
      },
      {
        id: 'oop-concepts',
        title: 'OOP Concepts',
        description: 'Encapsulation, Inheritance, Polymorphism, Abstraction',
        analogy: 'OOP is like designing microservices — each class is isolated with private data and public APIs.',
        sections: [
          { title: 'Encapsulation', content: 'Hide internal data and expose through public methods.', points: ['Use private modifier for data members', 'Provide public getters and setters', 'Control how data is accessed and modified', 'Improve maintainability and reduce bugs'] },
          { title: 'Inheritance', content: 'Extend classes to share behavior across related types.', points: ['Parent class provides common functionality', 'Child class inherits and extends parent', 'Use extends keyword in Java', 'Override parent methods in child class', 'Use super keyword to call parent methods'] },
          { title: 'Polymorphism', content: 'Objects can take multiple forms and behave differently.', points: ['Compile-time: Method overloading (same name, different params)', 'Runtime: Method overriding (child overrides parent)', 'Enables flexible and extensible code', 'Interface and abstract class support polymorphism'] },
        ],
        code: `abstract class Shape {\n  abstract double area();\n}\nclass Circle extends Shape {\n  private double r;\n  Circle(double radius) { r = radius; }\n  @Override\n  double area() { return Math.PI * r * r; }\n}`,
        interview: [
          { q: 'Abstraction vs Encapsulation?', a: 'Abstraction hides complexity (what). Encapsulation hides data (how).' },
        ],
      },
      {
        id: 'collections',
        title: 'Collections Framework',
        description: 'List, Set, Map, Queue data structures',
        analogy: 'Collections are your in-memory database. ArrayList like indexed table, HashMap like key-value store.',
        sections: [
          { title: 'List', content: 'Ordered collection allowing duplicates with fast random access.', points: ['ArrayList: resizable array, O(1) access, O(n) insert/delete', 'LinkedList: doubly-linked nodes, O(n) access, O(1) insert/delete at ends', 'Stack and Queue implementations', 'Iterate using for-each or Iterator'] },
          { title: 'Set', content: 'Unordered collection of unique elements.', points: ['HashSet: O(1) average operations, no guaranteed order', 'TreeSet: sorted order, O(log n) operations', 'LinkedHashSet: insertion order maintained', 'No duplicate elements allowed'] },
          { title: 'Map', content: 'Collection of key-value pairs.', points: ['HashMap: fast key lookup with O(1) average', 'TreeMap: sorted by key', 'LinkedHashMap: insertion order preserved', 'Hashtable: legacy synchronized version'] },
        ],
        code: `List<String> list = new ArrayList<>();\nlist.add("Java");\nfor (String item : list) System.out.println(item);\n\nSet<String> set = new HashSet<>(list);\nMap<String, Integer> map = new HashMap<>();\nmap.put("Java", 8);`,
        interview: [
          { q: 'HashMap internals?', a: 'Array of buckets - hashCode determines index, collisions chain entries in buckets.' },
        ],
      },
      {
        id: 'java8-streams',
        title: 'Java 8 - Streams & Lambda',
        description: 'Functional programming with streams and lambda expressions',
        analogy: 'Streams are Unix pipes. Lambda functions let you pass behavior as data.',
        sections: [
          { title: 'Lambda', content: 'Anonymous functions enabling functional programming style.', points: ['Syntax: (parameters) -> expression or code block', 'No parentheses for single param: x -> x * 2', 'Method references with :: for existing methods', 'Enables functional interfaces and callbacks'] },
          { title: 'Streams', content: 'Lazy pipeline operations for bulk data processing.', points: ['filter(predicate): keep matching elements', 'map(function): transform each element', 'flatMap(function): transform and flatten nested streams', 'collect(Collectors): gather results into collection', 'reduce(): aggregate stream to single value'] },
          { title: 'Optional', content: 'Elegant null handling without null checks.', points: ['Wraps potentially null value', 'ifPresent(consumer): execute if present', 'orElse(default): get value or default', 'map(function): chain operations safely', 'Prevents NullPointerException'] },
        ],
        code: `List<User> users = new ArrayList<>();\nList<String> names = users.stream()\n  .filter(u -> u.isActive())\n  .map(User::getName)\n  .collect(Collectors.toList());\n\nOptional<User> user = users.stream()\n  .filter(u -> u.getId() == 1)\n  .findFirst();`,
        interview: [
          { q: 'map vs flatMap?', a: 'map: 1:1 transformation. flatMap: 1:many transformation, flattens nested streams.' },
        ],
      },
    ],
  },
  {
    id: 'phase2',
    phase: 'PHASE 2',
    title: 'Advanced Java',
    color: '#5382a1',
    level: 'Intermediate',
    topics: [
      {
        id: 'jdbc',
        title: 'JDBC & Databases',
        description: 'Database connectivity and data persistence',
        analogy: 'JDBC is like a telephone operator connecting your Java app to database servers.',
        sections: [
          { title: 'Connection Setup', content: 'Establish connection to database using JDBC drivers.', points: ['Load driver: Class.forName("org.mysql.jdbc.Driver")', 'DriverManager: creates connections to databases', 'DataSource: object for connection pooling', 'Connection pooling: reuse connections for efficiency'] },
          { title: 'Statements', content: 'Execute SQL queries safely and efficiently.', points: ['Statement: basic SQL execution', 'PreparedStatement: parameterized queries prevent SQL injection', 'CallableStatement: execute stored procedures', 'Batch processing: multiple statements at once'] },
          { title: 'Result Sets', content: 'Retrieve and iterate database query results.', points: ['ResultSet: represents query result rows', 'next(): move cursor to next row', 'getString(), getInt(), getDouble(): extract column values', 'Metadata: get column information'] },
        ],
        code: `Connection conn = DriverManager.getConnection(url, user, pass);\nPreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id=?");\nps.setInt(1, userId);\nResultSet rs = ps.executeQuery();\nwhile (rs.next()) {\n  String name = rs.getString("name");\n}`,
        interview: [
          { q: 'What is connection pooling?', a: 'Reuse database connections instead of creating new ones for each query, dramatically improving performance.' },
        ],
      },
      {
        id: 'mvc-pattern',
        title: 'MVC Architecture',
        description: 'Model-View-Controller pattern for web applications',
        analogy: 'MVC is like a restaurant: Model is the kitchen, View is the plate presentation, Controller is the waiter.',
        sections: [
          { title: 'Model', content: 'Represents business logic and data.', points: ['Encapsulates data and business rules', 'Independent of UI presentation', 'Communicates with database', 'Reusable across different interfaces'] },
          { title: 'View', content: 'Displays data to the user.', points: ['HTML templates, JSP pages', 'Renders data from Model', 'User sees and interacts with View', 'No business logic in View'] },
          { title: 'Controller', content: 'Handles user input and coordinates Model/View.', points: ['Receives user requests', 'Updates Model based on input', 'Selects appropriate View', 'Routes logic between Model and View'] },
        ],
        code: `// Model\npublic class User { private String name; }\n\n// Controller\n@RequestMapping("/users")\npublic String getUsers(Model model) {\n  List<User> users = userService.findAll();\n  model.addAttribute("users", users);\n  return "users-view";  // View name\n}`,
        interview: [
          { q: 'Why separate concerns in MVC?', a: 'Improves maintainability, testability, and allows parallel development of features.' },
        ],
      },
    ],
  },
  {
    id: 'phase3',
    phase: 'PHASE 3',
    title: 'Spring Boot System',
    color: '#6db33f',
    level: 'Intermediate',
    topics: [
      {
        id: 'spring-ioc',
        title: 'Spring IoC & DI',
        description: 'Inversion of Control and Dependency Injection for loose coupling',
        analogy: 'IoC is like hiring a manager to handle your team instead of managing yourself.',
        sections: [
          { title: 'Inversion of Control', content: 'Framework manages object lifecycle instead of code.', points: ['Objects created and configured by container', 'Reduces boilerplate and tight coupling', 'Framework handles initialization sequence', 'Dependencies resolved automatically'] },
          { title: 'Dependency Injection', content: 'Framework injects dependencies into objects.', points: ['Constructor injection: immutable dependencies', 'Setter injection: optional dependencies', 'Field injection: direct annotation on fields', '@Autowired: Spring marks injectable fields'] },
          { title: 'Beans', content: 'Spring-managed objects in the container.', points: ['Beans defined via annotations or XML', '@Component, @Service, @Repository stereotypes', 'Singleton scope by default', 'Lifecycle hooks: @PostConstruct, @PreDestroy'] },
        ],
        code: `@Service\npublic class UserService {\n  private final UserRepository repo;\n  @Autowired\n  public UserService(UserRepository repo) {\n    this.repo = repo;  // Constructor injection\n  }\n  public User findById(Long id) { return repo.findById(id); }\n}`,
        interview: [
          { q: 'Constructor vs Setter injection?', a: 'Constructor is immutable and shows required deps clearly. Setter allows optional deps.' },
        ],
      },
      {
        id: 'rest-apis',
        title: 'REST APIs with Spring',
        description: 'Building RESTful web services with Spring Boot',
        analogy: 'REST APIs are like vending machines - you give input (request), get output (response).',
        sections: [
          { title: 'HTTP Methods', content: 'Standard operations for resources.', points: ['GET: fetch data (safe, idempotent)', 'POST: create new resource', 'PUT: update existing resource (idempotent)', 'PATCH: partial update', 'DELETE: remove resource (idempotent)', 'HEAD: like GET but no response body'] },
          { title: 'Status Codes', content: 'Indicate result of HTTP request.', points: ['2xx Success: 200 OK, 201 Created, 204 No Content', '3xx Redirect: 301 Moved Permanently', '4xx Client Error: 400 Bad Request, 404 Not Found, 401 Unauthorized', '5xx Server Error: 500 Internal Server Error'] },
          { title: 'Response Format', content: 'JSON is standard data format for REST APIs.', points: ['@RestController returns JSON automatically', '@ResponseBody converts object to JSON', 'Content negotiation: accept headers', 'Error responses with standardized format'] },
        ],
        code: `@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n  @PostMapping\n  public ResponseEntity<User> create(@RequestBody User user) {\n    User saved = userService.save(user);\n    return ResponseEntity.status(201).body(saved);\n  }\n  @GetMapping("/{id}")\n  public User getById(@PathVariable Long id) {\n    return userService.findById(id);\n  }\n}`,
        interview: [
          { q: 'Idempotency in REST?', a: 'GET, PUT, DELETE should produce same result when called multiple times. POST is not idempotent.' },
        ],
      },
    ],
  },
  {
    id: 'phase4',
    phase: 'PHASE 4',
    title: 'Database Layer',
    color: '#5382a1',
    level: 'Intermediate',
    topics: [
      {
        id: 'jpa',
        title: 'JPA & Hibernate ORM',
        description: 'Object-Relational Mapping for database persistence',
        analogy: 'ORM is like a translator between Java objects and database tables.',
        sections: [
          { title: 'Entities', content: 'Java classes map to database tables.', points: ['@Entity marks class as persistable', '@Table specifies database table name', '@Column defines column properties', '@Id marks primary key', '@GeneratedValue auto-generates ID'] },
          { title: 'Relationships', content: 'Define associations between entities.', points: ['@OneToMany: one parent, many children', '@ManyToOne: many children, one parent', '@ManyToMany: many-to-many relationships', '@JoinTable: join table configuration', 'Cascade types: delete children when parent deleted'] },
          { title: 'Queries', content: 'Query entities using JPQL or Criteria API.', points: ['JPQL: SELECT u FROM User u WHERE u.id = ?', 'Named queries: @NamedQuery for reusable queries', 'Criteria API: type-safe query construction', 'Repository pattern: Spring Data JPA'] },
        ],
        code: `@Entity\n@Table(name = "users")\npublic class User {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n  @Column(nullable = false, unique = true)\n  private String email;\n  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)\n  private List<Order> orders;\n}`,
        interview: [
          { q: 'Lazy vs Eager loading?', a: 'Lazy loads data on first access (efficient), Eager loads immediately (impacts performance). Default is Lazy for collections.' },
        ],
      },
      {
        id: 'database-design',
        title: 'Database Design & Optimization',
        description: 'SQL optimization, indexing, and query performance',
        analogy: 'Database design is like city planning - good layout prevents traffic jams.',
        sections: [
          { title: 'Normalization', content: 'Organize data to reduce redundancy and improve integrity.', points: ['1NF: atomic values, no repeating groups', '2NF: no partial dependencies', '3NF: no transitive dependencies', 'Denormalization: trade storage for query speed when needed'] },
          { title: 'Indexing', content: 'Speed up queries on frequently searched columns.', points: ['Primary key: unique identifier for each row', 'Unique index: ensures uniqueness', 'Composite index: index on multiple columns', 'B-Tree indexes: most common structure', 'Full-text indexes: for text search'] },
          { title: 'Query Optimization', content: 'Write efficient queries that execute quickly.', points: ['Use EXPLAIN to analyze query execution', 'Avoid N+1 queries: use JOINs instead', 'Index on WHERE and JOIN conditions', 'Limit result set size with LIMIT', 'Use projection: select only needed columns'] },
        ],
        code: `CREATE INDEX idx_user_email ON users(email);\nCREATE INDEX idx_order_user_date ON orders(user_id, created_at);\n\nSELECT u.name, COUNT(o.id) \nFROM users u LEFT JOIN orders o ON u.id = o.user_id\nWHERE u.created_at > NOW() - INTERVAL 30 DAY\nGROUP BY u.id\nLIMIT 100;`,
        interview: [
          { q: 'N+1 query problem?', a: 'Fetching parent then issuing separate query for each child. Solution: use JOIN to fetch all in one query or Lazy loading.' },
        ],
      },
    ],
  },
  {
    id: 'phase5',
    phase: 'PHASE 5',
    title: 'Security Module',
    color: '#ff9f1c',
    level: 'Advanced',
    topics: [
      {
        id: 'spring-security',
        title: 'Spring Security & JWT',
        description: 'Authentication and Authorization in modern applications',
        analogy: 'Security is like an airport: Authentication = showing ID, Authorization = checking your clearance.',
        sections: [
          { title: 'Authentication', content: 'Verify user identity through credentials or OAuth.', points: ['Username/password authentication', 'OAuth2/OpenID Connect: third-party login', 'Multi-factor authentication (MFA)', 'SecurityContext stores authenticated user info'] },
          { title: 'JWT Tokens', content: 'Stateless token-based authentication.', points: ['Header.Payload.Signature structure', 'Header: token type and algorithm', 'Payload: user claims and data', 'Signature: cryptographic validation', 'Tokens expire: refresh tokens for renewal'] },
          { title: 'Authorization', content: 'Control what authenticated users can access.', points: ['Roles: ADMIN, USER, MODERATOR', 'Permissions: fine-grained access control', 'RBAC: role-based access control', '@PreAuthorize: method-level security', '@Secured: role-based method protection'] },
        ],
        code: `@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n  @Bean\n  protected SecurityFilterChain configure(HttpSecurity http) throws Exception {\n    http.authorizeRequests()\n      .antMatchers("/admin/**").hasRole("ADMIN")\n      .antMatchers("/api/**").authenticated()\n      .anyRequest().permitAll()\n      .and().formLogin()\n      .and().logout();\n    return http.build();\n  }\n}`,
        interview: [
          { q: 'Stateful vs Stateless authentication?', a: 'Stateful uses sessions (server stores state), Stateless uses JWT (token has all info, no server storage).' },
        ],
      },
      {
        id: 'security-best-practices',
        title: 'Security Best Practices',
        description: 'Prevent common vulnerabilities: SQL injection, XSS, CSRF',
        analogy: 'Security practices are like locking your house - multiple layers of protection.',
        sections: [
          { title: 'Input Validation', content: 'Never trust user input - always sanitize and validate.', points: ['Validate input format and type', 'Reject inputs that don\'t match expected pattern', 'Size limits to prevent buffer overflow', 'Whitelist allowed characters'] },
          { title: 'Encryption', content: 'Protect sensitive data with strong encryption.', points: ['Hash passwords: bcrypt, scrypt, PBKDF2', 'Never store plain passwords', 'Encrypt sensitive fields in database', 'HTTPS for data in transit', 'Use strong algorithms: AES-256'] },
          { title: 'CORS & CSRF', content: 'Prevent cross-origin and cross-site attacks.', points: ['CORS: control allowed origins', 'CSRF tokens: prevent form hijacking', 'SameSite cookies: limit third-party access', 'Content Security Policy headers'] },
        ],
        code: `// Validate input\nif (!email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Z|a-z]{2,}$")) {\n  throw new InvalidException("Invalid email");\n}\n// Hash password\nString hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt(12));\n// Verify password\nif (BCrypt.checkpw(password, hashedPassword)) { /* valid */ }`,
        interview: [
          { q: 'What is CSRF?', a: 'Cross-Site Request Forgery - attacker tricks user to perform unwanted actions on another website.' },
        ],
      },
    ],
  },
  {
    id: 'phase6',
    phase: 'PHASE 6',
    title: 'Frontend Integration',
    color: '#00f0ff',
    level: 'Intermediate',
    topics: [
      {
        id: 'react-axios',
        title: 'React + Axios API Integration',
        description: 'Frontend-backend communication with React hooks',
        analogy: 'Axios is like a delivery service - your component sends requests and gets responses.',
        sections: [
          { title: 'Hooks', content: 'React hooks manage component state and lifecycle.', points: ['useState: manage component state', 'useEffect: side effects on mount/update', 'useContext: access context values', 'Custom hooks: reusable logic', 'Dependency array: control when effect runs'] },
          { title: 'HTTP Requests', content: 'Send requests to backend with Axios.', points: ['GET: fetch data from server', 'POST: send data to create resource', 'PUT/PATCH: update existing resource', 'DELETE: remove resource', 'Interceptors: modify requests/responses'] },
          { title: 'Error Handling', content: 'Handle errors gracefully in frontend.', points: ['Try-catch for Promise rejections', 'Loading state: show spinner while fetching', 'Error state: display error messages', 'User feedback: toast notifications', 'Retry logic: automatic retry on failure'] },
        ],
        code: `const [users, setUsers] = useState([]);\nconst [loading, setLoading] = useState(true);\nconst [error, setError] = useState(null);\n\nuseEffect(() => {\n  axios.get('/api/users')\n    .then(res => setUsers(res.data))\n    .catch(err => setError(err.message))\n    .finally(() => setLoading(false));\n}, []);\n\nif (loading) return <div>Loading...</div>;\nif (error) return <div>Error: {error}</div>;`,
        interview: [
          { q: 'Why useEffect for API calls?', a: 'useEffect runs after render, allowing you to fetch data and update state. Dependency array controls when it runs.' },
        ],
      },
    ],
  },
  {
    id: 'phase7',
    phase: 'PHASE 7',
    title: 'Microservices',
    color: '#39ff14',
    level: 'Advanced',
    topics: [
      {
        id: 'microservices-arch',
        title: 'Microservices Architecture',
        description: 'Building scalable systems with independent services',
        analogy: 'Microservices are like departments in a company - each handles its own area.',
        sections: [
          { title: 'Service Independence', content: 'Each service is autonomous and handles one business capability.', points: ['Service owns its data: no shared database', 'Loose coupling: minimal dependencies', 'High cohesion: related functionality together', 'Independent deployment and scaling'] },
          { title: 'Communication', content: 'Services communicate synchronously or asynchronously.', points: ['Synchronous: REST APIs, gRPC real-time calls', 'Asynchronous: message queues, event streams', 'API Gateway: single entry point', 'Service Discovery: locate services dynamically'] },
          { title: 'Challenges', content: 'Complexity and operational challenges.', points: ['Distributed transactions: eventual consistency', 'Network latency: handle slow services', 'Monitoring: track across services', 'Debugging: trace requests through services'] },
        ],
        code: `// User Service\n@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n  @PostMapping\n  public User create(@RequestBody User user) { }\n}\n\n// Order Service\n@RestController\n@RequestMapping("/api/orders")\npublic class OrderController {\n  @PostMapping\n  public Order create(@RequestBody Order order) {\n    // Call User Service\n    User user = restTemplate.getForObject("/api/users/\" + order.getUserId(), User.class);\n  }\n}`,
        interview: [
          { q: 'Monolith vs Microservices?', a: 'Monolith is simpler but hard to scale. Microservices are complex but independently deployable with better scalability.' },
        ],
      },
    ],
  },
  {
    id: 'phase8',
    phase: 'PHASE 8',
    title: 'Deployment',
    color: '#ff9f1c',
    level: 'Advanced',
    topics: [
      {
        id: 'docker',
        title: 'Docker & Containerization',
        description: 'Package applications with all dependencies',
        analogy: 'Docker containers are like shipping containers - standardized, portable packages.',
        sections: [
          { title: 'Dockerfile', content: 'Define image layers and build steps.', points: ['FROM: base image', 'WORKDIR: set working directory', 'COPY: copy files into image', 'RUN: execute commands during build', 'CMD: default command to run', 'EXPOSE: document listening ports'] },
          { title: 'Images & Layers', content: 'Immutable templates for creating containers.', points: ['Image: blueprint (read-only)', 'Container: running instance from image', 'Layers: each step in Dockerfile', 'Union filesystem: stack layers', 'Registry: store and share images'] },
          { title: 'Docker Compose', content: 'Multi-container orchestration.', points: ['docker-compose.yml: define services', 'Services: backend, database, cache', 'Networking: auto service discovery', 'Volumes: persistent data storage'] },
        ],
        code: `FROM openjdk:11-jre-slim\nWORKDIR /app\nCOPY target/app.jar app.jar\nEXPOSE 8080\nCMD ["java", "-jar", "app.jar"]\n\n# Build: docker build -t myapp:latest .\n# Run: docker run -p 8080:8080 myapp:latest`,
        interview: [
          { q: 'Image vs Container?', a: 'Image is a blueprint (immutable template). Container is a running instance of an image.' },
        ],
      },
      {
        id: 'ci-cd',
        title: 'CI/CD Pipeline',
        description: 'Automated testing, building, and deployment',
        analogy: 'CI/CD is like an assembly line - code goes in, tested product comes out automatically.',
        sections: [
          { title: 'CI', content: 'Continuous Integration runs tests automatically on each code push.', points: ['Build on every commit', 'Run unit tests', 'Run integration tests', 'Code quality analysis', 'Fail fast: block bad code early'] },
          { title: 'CD', content: 'Continuous Deployment automatically releases to production.', points: ['Build artifacts', 'Deploy to staging', 'Run smoke tests', 'Deploy to production', 'Rollback on failure'] },
          { title: 'Tools', content: 'Popular CI/CD platforms and tools.', points: ['Jenkins: self-hosted CI/CD', 'GitHub Actions: integrated with GitHub', 'GitLab CI: GitLab built-in', 'CircleCI: cloud-based', 'Travis CI: for open source'] },
        ],
        code: `# GitHub Actions workflow\nname: CI/CD\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - run: mvn clean install\n      - run: mvn test\n      - run: mvn deploy`,
        interview: [
          { q: 'Why CI/CD?', a: 'Catch bugs early, deploy faster, reduce manual errors, enable rapid iteration.' },
        ],
      },
    ],
  },
  {
    id: 'phase9',
    phase: 'PHASE 9',
    title: 'Real-World Projects',
    color: '#00f0ff',
    level: 'Advanced',
    topics: [
      {
        id: 'ecommerce',
        title: 'E-Commerce Platform',
        description: 'Complete backend system for online shopping',
        analogy: 'Building an e-commerce system is like running a real store - inventory, payments, orders.',
        sections: [
          { title: 'Product Catalog', content: 'Database of products with inventory management.', points: ['Product entity: name, price, description', 'Category management: organize products', 'Inventory tracking: stock levels', 'Search and filtering: find products', 'Reviews and ratings: customer feedback'] },
          { title: 'Shopping Cart', content: 'Session-based or database-backed cart storage.', points: ['Add/remove items from cart', 'Update quantities', 'Calculate totals with tax', 'Apply coupon codes', 'Persist cart across sessions'] },
          { title: 'Payments', content: 'Integration with payment gateways.', points: ['Stripe integration: credit card payments', 'PayPal integration: alternative payment', 'Payment processing: secure transactions', 'PCI compliance: protect card data', 'Receipt generation: purchase confirmation'] },
          { title: 'Orders & Shipping', content: 'Order management and fulfillment.', points: ['Create order from cart', 'Order status tracking', 'Shipping address validation', 'Shipment tracking', 'Return management: handle returns'] },
        ],
        code: `@PostMapping("/checkout")\npublic ResponseEntity<Order> checkout(@RequestBody Cart cart) {\n  Order order = orderService.create(cart);\n  paymentService.process(order);\n  emailService.sendConfirmation(order);\n  inventoryService.decreaseStock(order);\n  return ResponseEntity.status(201).body(order);\n}`,
        interview: [
          { q: 'How to prevent overselling?', a: 'Use database transactions and row-level locks to ensure inventory is updated atomically.' },
        ],
      },
      {
        id: 'auth-system',
        title: 'Authentication System',
        description: 'Build secure user management system',
        analogy: 'Auth system is like a bouncer at a club - verifies identity and grants access.',
        sections: [
          { title: 'User Registration', content: 'Allow users to create accounts securely.', points: ['Email validation: verify email exists', 'Password requirements: enforce strength', 'Hash passwords with bcrypt', 'Email verification: confirm account ownership', 'Prevent duplicate accounts'] },
          { title: 'Login/Logout', content: 'Authenticate users and manage sessions.', points: ['Username/password validation', 'Generate JWT tokens on success', 'Return refresh tokens for renewal', 'Logout: invalidate tokens', 'Session management: track active users'] },
          { title: 'Password Reset', content: 'Secure token-based password recovery.', points: ['Email link with reset token', 'Token expiration: 1 hour validity', 'Verify old password before change', 'Hash new password', 'Notify user of password change'] },
          { title: 'OAuth Integration', content: 'Allow third-party login providers.', points: ['Google OAuth2 flow', 'GitHub OAuth2 flow', 'Facebook OAuth2 flow', 'Auto-create account on first login', 'Link social to existing account'] },
        ],
        code: `@PostMapping("/register")\npublic ResponseEntity<User> register(@RequestBody RegisterRequest req) {\n  User user = new User();\n  user.setEmail(req.getEmail());\n  user.setPassword(BCrypt.hashpw(req.getPassword(), BCrypt.gensalt(12)));\n  emailService.sendVerification(user);\n  return ResponseEntity.status(201).body(userService.save(user));\n}\n\n@PostMapping("/login")\npublic ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req) {\n  User user = userService.findByEmail(req.getEmail());\n  if (BCrypt.checkpw(req.getPassword(), user.getPassword())) {\n    String token = jwtService.generateToken(user);\n    return ResponseEntity.ok(new LoginResponse(token));\n  }\n  throw new UnauthorizedException("Invalid credentials");\n}`,
        interview: [
          { q: 'Why hash passwords?', a: 'Even if database is compromised, attackers cannot directly use passwords. Use bcrypt with salt for additional security.' },
        ],
      },
    ],
  },
]
