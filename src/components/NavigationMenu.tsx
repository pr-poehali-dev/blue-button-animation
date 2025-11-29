import Icon from '@/components/ui/icon';

interface NavigationMenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onQuizClick: () => void;
}

const NavigationMenu = ({ activeSection, setActiveSection, onQuizClick }: NavigationMenuProps) => {
  return (
    <nav className="fixed top-0 left-0 h-full flex flex-col gap-4 p-8 z-50">
      <button
        onClick={() => setActiveSection('binder')}
        className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 ease-out hover:translate-x-2 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 border-2 border-transparent hover:border-cyan-400/60"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Icon name="ShieldCheck" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-6 group-hover:ml-0" size={20} />
          Биндер
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
      
      <button
        onClick={() => setActiveSection('handbook')}
        className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 ease-out hover:translate-x-2 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 border-2 border-transparent hover:border-cyan-400/60"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Icon name="ShieldCheck" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-6 group-hover:ml-0" size={20} />
          Справочник
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
      
      <button
        onClick={() => setActiveSection('newbies')}
        className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 ease-out hover:translate-x-2 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 border-2 border-transparent hover:border-cyan-400/60"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Icon name="ShieldCheck" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-6 group-hover:ml-0" size={20} />
          Всё для новичков
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      <button
        onClick={onQuizClick}
        className="group relative px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold transition-all duration-300 ease-out hover:translate-x-2 hover:scale-110 hover:shadow-2xl hover:shadow-accent/50 border-2 border-transparent hover:border-yellow-400/60"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Icon name="Brain" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-6 group-hover:ml-0" size={20} />
          Проверка знаний
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </nav>
  );
};

export default NavigationMenu;
