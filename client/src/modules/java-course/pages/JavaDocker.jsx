import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, CheckCircleIcon, ChevronDownIcon, ArrowRightIcon, CommandLineIcon } from '@heroicons/react/24/outline';

function CodeBlock({ code, language = 'bash', title }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Copied!');
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-2xl overflow-hidden border border-java-border-dark my-4 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          {title && <span className="text-xs text-gray-400 font-mono ml-1">{title}</span>}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 font-mono px-2 py-0.5 bg-java-blue/10 rounded">{language}</span>
          <button onClick={copy} className="text-gray-500 hover:text-java-orange transition-colors p-1 rounded">
            {copied ? <ClipboardDocumentCheckIcon className="w-4 h-4 text-green-400" /> : <ClipboardDocumentIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <pre className="bg-[#0d1117] text-green-300 p-5 text-sm overflow-x-auto font-mono leading-relaxed scrollbar-thin whitespace-pre">{code}</pre>
    </div>
  );
}

const steps = [
  {
    number: 1,
    title: 'Install Docker Desktop',
    desc: 'Download Docker Desktop from docker.com and verify the installation.',
    code: `# Visit https://www.docker.com/products/docker-desktop
# Download and install for Windows / Mac / Linux

# Verify installation
docker --version
# Docker version 24.0.7, build afdd53b

docker-compose --version
# Docker Compose version v2.23.3`,
    lang: 'bash',
    filename: 'terminal',
  },
  {
    number: 2,
    title: 'Create Your Java Application',
    desc: 'Create a simple Java application to containerize.',
    code: `// src/Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════╗");
        System.out.println("║   Java Running in Docker! 🐳  ║");
        System.out.println("║   Java In My Style ☕         ║");
        System.out.println("╚══════════════════════════════╝");

        String javaVersion = System.getProperty("java.version");
        System.out.println("Java version: " + javaVersion);
        System.out.println("Container is healthy and running!");
    }
}`,
    lang: 'java',
    filename: 'src/Main.java',
  },
  {
    number: 3,
    title: 'Create a Dockerfile',
    desc: 'Use a multi-stage Dockerfile to keep the image lean.',
    code: `# ─── Stage 1: Build ───────────────────────────────────
FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app

# Copy source files
COPY src/ ./src/

# Compile Java source
RUN mkdir -p out && javac src/Main.java -d out/

# ─── Stage 2: Runtime ─────────────────────────────────
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy compiled classes from builder stage
COPY --from=builder /app/out ./

# Metadata labels
LABEL maintainer="Tech In My Style"
LABEL description="Java In My Style - Docker Demo"
LABEL version="1.0"

# Run the application
CMD ["java", "Main"]`,
    lang: 'dockerfile',
    filename: 'Dockerfile',
  },
  {
    number: 4,
    title: 'Create .dockerignore',
    desc: 'Exclude unnecessary files from the build context to speed things up.',
    code: `# .dockerignore
.git
.gitignore
*.md
*.log
target/
build/
.idea/
*.iml
.DS_Store
node_modules/`,
    lang: 'text',
    filename: '.dockerignore',
  },
  {
    number: 5,
    title: 'Build the Docker Image',
    desc: 'Build and tag your Docker image.',
    code: `# Build the image (tag: java-myapp, version: 1.0)
docker build -t java-myapp:1.0 .

# Build with verbose output
docker build --progress=plain -t java-myapp:1.0 .

# List your images
docker images | grep java-myapp

# Expected output:
# REPOSITORY   TAG   IMAGE ID       CREATED          SIZE
# java-myapp   1.0   a1b2c3d4e5f6   10 seconds ago   185MB`,
    lang: 'bash',
    filename: 'terminal',
  },
  {
    number: 6,
    title: 'Run the Container',
    desc: 'Start your Java application inside Docker.',
    code: `# Run the container
docker run --name java-style-app java-myapp:1.0

# ──────────────────────────────────────────────────────
# Expected Output:
# ╔══════════════════════════════╗
# ║   Java Running in Docker! 🐳  ║
# ║   Java In My Style ☕         ║
# ╚══════════════════════════════╝
# Java version: 17.0.9
# Container is healthy and running!
# ──────────────────────────────────────────────────────

# Run a web app with port mapping
docker run -d -p 8080:8080 --name java-web java-myapp:1.0

# Check running containers
docker ps

# View logs
docker logs java-style-app`,
    lang: 'bash',
    filename: 'terminal',
  },
  {
    number: 7,
    title: 'Docker Compose for Multi-Service Apps',
    desc: 'Use Docker Compose to manage Java apps with databases.',
    code: `# docker-compose.yml
version: '3.9'

services:
  # Java Application Service
  java-app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: java-in-my-style
    ports:
      - "8080:8080"
    environment:
      - JAVA_OPTS=-Xmx512m -Xms256m
      - APP_ENV=production
      - DB_HOST=db
      - DB_PORT=5432
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped
    networks:
      - java-network

  # PostgreSQL Database Service
  db:
    image: postgres:15-alpine
    container_name: java-db
    environment:
      POSTGRES_DB: javadb
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret123
    ports:
      - "5432:5432"
    volumes:
      - db-data:/var/lib/postgresql/data
      - ./sql/init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U admin -d javadb"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - java-network

  # Redis Cache (optional)
  redis:
    image: redis:7-alpine
    container_name: java-cache
    ports:
      - "6379:6379"
    networks:
      - java-network

volumes:
  db-data:

networks:
  java-network:
    driver: bridge`,
    lang: 'yaml',
    filename: 'docker-compose.yml',
  },
];

const dockerCommands = [
  { cmd: 'docker build -t app:tag .', desc: 'Build image from Dockerfile in current dir' },
  { cmd: 'docker run -p 8080:8080 app', desc: 'Run container with port mapping' },
  { cmd: 'docker run -d app', desc: 'Run container in detached (background) mode' },
  { cmd: 'docker ps', desc: 'List running containers' },
  { cmd: 'docker ps -a', desc: 'List all containers (including stopped)' },
  { cmd: 'docker images', desc: 'List all local images' },
  { cmd: 'docker stop <id>', desc: 'Gracefully stop a running container' },
  { cmd: 'docker rm <id>', desc: 'Remove a stopped container' },
  { cmd: 'docker rmi <image>', desc: 'Remove a local image' },
  { cmd: 'docker logs -f <id>', desc: 'Follow container log output' },
  { cmd: 'docker exec -it <id> sh', desc: 'Open shell inside running container' },
  { cmd: 'docker-compose up -d', desc: 'Start all services in background' },
  { cmd: 'docker-compose down', desc: 'Stop and remove all services' },
  { cmd: 'docker system prune -a', desc: 'Remove all unused images & containers' },
];

const tips = [
  {
    q: 'Use multi-stage builds to minimize image size',
    a: 'Multi-stage builds let you compile with a full JDK image and run with a lightweight JRE-only image. This reduces size from ~600MB (JDK) to ~185MB (JRE Alpine) — a 70% reduction!',
  },
  {
    q: 'Choose Alpine-based images for smaller footprint',
    a: 'Use `eclipse-temurin:17-jre-alpine` instead of `openjdk:17-jre`. Alpine Linux is ~5MB vs ~100MB for Debian. Always use specific version tags (17-jre-alpine) — never `latest`.',
  },
  {
    q: 'Set JVM memory limits for containers',
    a: "Containers have memory limits, but old JVMs didn't respect them. Use Java 17+ which auto-detects container memory. Or set explicitly: `-e JAVA_OPTS=\"-Xmx512m -Xms256m\"`.",
  },
  {
    q: 'Use .dockerignore like .gitignore',
    a: 'Always create a `.dockerignore` file to exclude `.git`, `target/`, `*.log`, `node_modules/`, IDE files, etc. This reduces build context size and speeds up `docker build` significantly.',
  },
  {
    q: 'Run containers as non-root user',
    a: 'Add `RUN adduser -D appuser && USER appuser` to your Dockerfile. Running as root inside a container is a security risk. Non-root containers are a best practice in production deployments.',
  },
];

export default function Docker() {
  const [openTip, setOpenTip] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-java-darker">
      {/* ===== HEADER ===== */}
      <section className="relative py-20 bg-gradient-to-br from-java-dark via-[#0a1628] to-java-darker overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#0074BD 1px,transparent 1px),linear-gradient(90deg,#0074BD 1px,transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-java-blue/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5 font-poppins">
                🐳 Containerization Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
                Java with{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-java-blue bg-clip-text text-transparent">
                  Docker
                </span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mb-6 leading-relaxed">
                Learn to containerize your Java applications step by step — from writing a Dockerfile to
                orchestrating multi-service apps with Docker Compose.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Link to="/java-course" className="hover:text-java-orange transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-java-orange">Docker Guide</span>
              </div>
            </div>

            {/* Logo pair */}
            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                  className="w-20 h-20 mx-auto"
                  alt="Docker"
                />
                <p className="text-gray-400 text-xs mt-2 font-mono">Docker</p>
              </div>
              <div className="text-3xl font-bold text-white/20">+</div>
              <div className="text-center">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                  className="w-20 h-20 mx-auto"
                  alt="Java"
                />
                <p className="text-gray-400 text-xs mt-2 font-mono">Java</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── What is Docker ── */}
          <div className="mb-12 p-7 bg-white dark:bg-java-card-dark rounded-3xl border border-gray-100 dark:border-java-border-dark shadow-sm">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🐳</span> What is Docker?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              Docker lets you package your Java application along with its entire environment (JRE, dependencies,
              configs) into a{' '}
              <strong className="text-java-blue dark:text-java-orange">container</strong>. Containers run identically
              on any machine — eliminating "works on my machine" forever.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { emoji: '📦', title: 'Portable', desc: 'Runs on any OS with Docker installed' },
                { emoji: '⚡', title: 'Fast', desc: 'Starts in milliseconds, not minutes' },
                { emoji: '🔒', title: 'Isolated', desc: 'Apps are completely sandboxed' },
              ].map((b) => (
                <div
                  key={b.title}
                  className="text-center p-5 bg-gray-50 dark:bg-java-darker rounded-2xl border border-gray-100 dark:border-java-border-dark"
                >
                  <div className="text-3xl mb-2">{b.emoji}</div>
                  <h4 className="font-poppins font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {b.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Prerequisites ── */}
          <div className="mb-12 p-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/30">
            <h3 className="text-base font-bold font-poppins text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
              <span>📋</span> Prerequisites
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                'Java JDK 11+ installed',
                'Docker Desktop installed & running',
                'Basic Java programming knowledge',
                'Command line / terminal familiarity',
              ].map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
                  <CheckCircleIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* ── Steps ── */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-10">
              📖 Step-by-Step Guide
            </h2>
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div key={step.number} className="relative pl-16">
                  {/* Step number badge */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-java-blue to-java-lightblue flex items-center justify-center text-white font-bold text-lg font-poppins shadow-lg z-10">
                    {step.number}
                  </div>
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div
                      className="absolute left-6 top-14 w-0.5 bg-gradient-to-b from-java-blue/40 to-transparent"
                      style={{ height: 'calc(100% + 2.5rem)' }}
                    />
                  )}
                  <div className="pt-1">
                    <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-0">{step.desc}</p>
                    <CodeBlock code={step.code} language={step.lang} title={step.filename} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Cheatsheet ── */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <CommandLineIcon className="w-7 h-7 text-java-blue dark:text-java-orange" />
              Docker Cheatsheet
            </h2>
            <div className="bg-[#0d1117] rounded-2xl border border-java-border-dark overflow-hidden">
              <div className="px-5 py-3 bg-[#161b22] border-b border-white/5">
                <span className="text-sm text-gray-400 font-mono">Docker Commands — Quick Reference</span>
              </div>
              <div className="p-2">
                {dockerCommands.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors border-b border-white/[0.03] last:border-0"
                  >
                    <code className="text-java-orange text-xs font-mono flex-shrink-0 w-52 truncate bg-java-orange/5 px-2 py-1 rounded-lg">
                      {c.cmd}
                    </code>
                    <span className="text-gray-400 text-xs">{c.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Best Practices ── */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
              💡 Best Practices
            </h2>
            <div className="space-y-3">
              {tips.map((tip, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 dark:border-java-border-dark bg-white dark:bg-java-card-dark overflow-hidden"
                >
                  <button
                    onClick={() => setOpenTip(openTip === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left group"
                  >
                    <span className="font-poppins font-medium text-gray-900 dark:text-white text-sm group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors pr-4 flex items-center gap-3">
                      <span className="text-java-orange font-bold font-mono text-xs bg-java-orange/10 px-2 py-0.5 rounded-lg">
                        #{i + 1}
                      </span>
                      {tip.q}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        openTip === i ? 'rotate-180 text-java-blue dark:text-java-orange' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openTip === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tip.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-java-blue" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <div className="relative p-10 text-center">
              <h3 className="text-2xl font-bold font-poppins text-white mb-3">
                Practice Java Before Dockerizing
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Test your Java code in our AI-powered compiler first, then containerize with confidence.
              </p>
              <Link
                to="/java-course/compiler"
                className="inline-flex items-center gap-2 bg-white text-java-blue font-bold px-7 py-3 rounded-xl hover:bg-java-orange hover:text-white transition-all hover:shadow-xl"
              >
                Open Java Compiler <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
