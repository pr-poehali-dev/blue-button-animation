import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Современная платформа для онлайн-продаж с интеграцией платежей',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile Banking App',
      description: 'Мобильное приложение для управления финансами',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Интеллектуальный помощник на базе GPT-4',
      tags: ['Python', 'OpenAI', 'FastAPI'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Node.js & Python', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 88 },
    { name: 'DevOps & CI/CD', level: 80 }
  ];

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Алексей Иванов
          </h1>
          <p className="text-2xl text-muted-foreground mb-2">Fullstack Developer & UI/UX Designer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Создаю современные веб-приложения с фокусом на пользовательский опыт и производительность
          </p>
        </div>
        
        <div className="flex gap-4 mb-12">
          <Button size="lg" className="text-lg px-8 group">
            <Icon name="Mail" className="mr-2 group-hover:scale-110 transition-transform" />
            Связаться
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 group">
            <Icon name="Github" className="mr-2 group-hover:rotate-12 transition-transform" />
            GitHub
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Проектов</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors">
            <div className="text-4xl font-bold text-secondary mb-2">5+</div>
            <div className="text-muted-foreground">Лет опыта</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors">
            <div className="text-4xl font-bold text-accent mb-2">30+</div>
            <div className="text-muted-foreground">Клиентов</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-20">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Последние проекты
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Icon name="ArrowUpRight" className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="min-h-screen py-20">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Навыки и технологии
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-xl font-semibold">{skill.name}</span>
                <span className="text-xl font-semibold text-primary">{skill.level}%</span>
              </div>
              <div className="h-4 bg-secondary/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
