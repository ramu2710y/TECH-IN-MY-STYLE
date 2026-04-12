export default function DscAbout() {
  return (
    <main className="dsc-about-container">
      <section className="dsc-about-header">
        <h1>About Us</h1>
        <p>Learn more about Data Science in my style and our mission</p>
      </section>

      <section className="dsc-about-content">
        <div className="dsc-about-image">
          <img
            src="https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team working on data science projects"
          />
        </div>
        <div className="dsc-about-text">
          <h2>Our Mission</h2>
          <p>
            At &quot;Data Science in my style,&quot; our mission is to make data science education accessible,
            practical, and engaging for everyone. We believe in a hands-on approach to learning,
            focusing on real-world applications and practical skills.
          </p>
          <h2>Our Approach</h2>
          <p>We&apos;ve structured our content to follow a logical progression, from basic concepts to advanced techniques. Each topic includes:</p>
          <ul>
            <li>Clear, concise descriptions</li>
            <li>Necessary prerequisites</li>
            <li>Practical examples</li>
            <li>Real-world applications</li>
            <li>Curated resources for further learning</li>
            <li>Common interview questions to help you prepare for your career</li>
          </ul>
          <h2>Who We Are</h2>
          <p>
            We are a team of data science educators passionate about sharing our knowledge and experience.
            With backgrounds in statistics, computer science, and various industries, we bring diverse
            perspectives to help you understand data science comprehensively.
          </p>
        </div>
      </section>
    </main>
  );
}
