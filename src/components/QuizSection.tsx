import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(20).fill(false));

  const questions = [
    {
      question: "С какого возраста разрешено управлять мотоциклом категории А?",
      answers: ["С 16 лет", "С 18 лет", "С 21 года", "С 14 лет"],
      correct: 1
    },
    {
      question: "Разрешается ли водителю пользоваться телефоном во время движения?",
      answers: ["Да, всегда", "Нет, запрещено", "Только с гарнитурой hands-free", "Только на светофоре"],
      correct: 2
    },
    {
      question: "Какова максимальная скорость в населенном пункте?",
      answers: ["40 км/ч", "50 км/ч", "60 км/ч", "70 км/ч"],
      correct: 2
    },
    {
      question: "Что означает желтый мигающий сигнал светофора?",
      answers: ["Стоп", "Приготовиться", "Нерегулируемый перекресток", "Движение запрещено"],
      correct: 2
    },
    {
      question: "Разрешен ли обгон на пешеходном переходе?",
      answers: ["Да", "Нет", "Только если нет пешеходов", "Только вне населенного пункта"],
      correct: 1
    },
    {
      question: "Какое расстояние должно быть до знака 'Остановка запрещена'?",
      answers: ["3 метра", "5 метров", "10 метров", "15 метров"],
      correct: 1
    },
    {
      question: "Что должен сделать водитель при включении проблескового маячка спецтранспорта?",
      answers: ["Продолжить движение", "Уступить дорогу", "Остановиться", "Ускориться"],
      correct: 1
    },
    {
      question: "Разрешена ли остановка на автомагистрали?",
      answers: ["Да", "Нет, только вынужденная", "Да, на 5 минут", "Только ночью"],
      correct: 1
    },
    {
      question: "С какой максимальной скоростью можно двигаться во дворе?",
      answers: ["10 км/ч", "20 км/ч", "30 км/ч", "40 км/ч"],
      correct: 1
    },
    {
      question: "Нужно ли включать ближний свет фар днем вне населенного пункта?",
      answers: ["Нет", "Да, обязательно", "Только зимой", "По желанию"],
      correct: 1
    },
    {
      question: "Что означает круглый знак с красной каймой и пустым центром?",
      answers: ["Движение запрещено", "Въезд запрещен", "Остановка запрещена", "Стоянка запрещена"],
      correct: 0
    },
    {
      question: "Какова максимальная скорость на автомагистрали для легкового авто?",
      answers: ["90 км/ч", "110 км/ч", "130 км/ч", "150 км/ч"],
      correct: 1
    },
    {
      question: "Разрешено ли движение задним ходом на перекрестке?",
      answers: ["Да", "Нет", "Только на регулируемом", "Только ночью"],
      correct: 1
    },
    {
      question: "Когда можно пересекать сплошную линию разметки?",
      answers: ["Никогда", "При обгоне", "Для объезда препятствия", "На перекрестке"],
      correct: 2
    },
    {
      question: "Что такое 'слепая зона'?",
      answers: ["Темный участок дороги", "Зона, не видимая в зеркалах", "Запрещенная зона", "Зона для инвалидов"],
      correct: 1
    },
    {
      question: "Разрешена ли буксировка при гололеде?",
      answers: ["Да", "Нет", "Только на жесткой сцепке", "Только днем"],
      correct: 2
    },
    {
      question: "Какова минимальная глубина протектора шин легкового авто?",
      answers: ["1 мм", "1.6 мм", "2 мм", "3 мм"],
      correct: 1
    },
    {
      question: "Обязательно ли наличие аптечки в автомобиле?",
      answers: ["Нет", "Да", "Только для такси", "По желанию"],
      correct: 1
    },
    {
      question: "Что означает знак 'Уступи дорогу'?",
      answers: ["Остановиться", "Пропустить ТС на главной дороге", "Снизить скорость", "Остановка запрещена"],
      correct: 1
    },
    {
      question: "Разрешена ли перевозка детей до 7 лет без автокресла?",
      answers: ["Да", "Нет", "Только на заднем сиденье", "Только на короткие расстояния"],
      correct: 1
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions(new Array(20).fill(false));
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    const isPassed = percentage >= 80;
    
    return (
      <section className="min-h-screen flex flex-col justify-center py-20">
        <h1 className="text-6xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Проверка знаний ПДД
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Пройдите тест из 20 вопросов и проверьте свои знания правил дорожного движения
        </p>
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className={`mb-8 p-12 rounded-3xl ${isPassed ? 'bg-green-500/10 border-2 border-green-500' : 'bg-red-500/10 border-2 border-red-500'} relative overflow-hidden`}>
            <div className="absolute inset-0 animate-pulse opacity-20">
              {isPassed ? (
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600" />
              )}
            </div>
            
            <div className="relative z-10">
              <Icon 
                name={isPassed ? "Trophy" : "XCircle"} 
                size={80} 
                className={`mx-auto mb-6 ${isPassed ? 'text-green-500' : 'text-red-500'} animate-bounce`}
              />
              <h2 className="text-5xl font-bold mb-4">
                {isPassed ? 'Поздравляем!' : 'Попробуйте ещё раз'}
              </h2>
              <p className="text-3xl font-bold mb-4">
                Ваш результат: {score} из {questions.length}
              </p>
              <p className="text-2xl text-muted-foreground mb-2">
                {percentage.toFixed(0)}% правильных ответов
              </p>
              <p className="text-lg text-muted-foreground">
                {isPassed ? 'Отличное знание ПДД!' : 'Для сдачи экзамена нужно минимум 80%'}
              </p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={resetQuiz}
            className="text-xl px-12 py-8 group hover:scale-110 transition-all duration-300"
          >
            <Icon name="RotateCcw" className="mr-3 group-hover:rotate-180 transition-transform duration-500" />
            Пройти тест заново
          </Button>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <h1 className="text-6xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
        Проверка знаний ПДД
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-12">
        Пройдите тест из 20 вопросов и проверьте свои знания правил дорожного движения
      </p>
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">
              Вопрос {currentQuestion + 1} из {questions.length}
            </span>
            <span className="text-xl font-semibold text-primary">
              Счёт: {score}
            </span>
          </div>
          
          <div className="relative h-4 bg-secondary/30 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 animate-pulse bg-white/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-lg">
              {progress.toFixed(0)}%
            </div>
          </div>
        </div>

        <Card className="p-8 mb-6 border-2 border-primary/30 hover:border-primary transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-8 text-center leading-relaxed">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === questions[currentQuestion].correct;
              const showResultState = answeredQuestions[currentQuestion];
              
              let buttonClass = "p-6 text-lg font-medium rounded-xl transition-all duration-300 border-2 hover:scale-105 ";
              
              if (showResultState) {
                if (isCorrect) {
                  buttonClass += "bg-green-500/20 border-green-500 text-green-500 scale-105";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-red-500/20 border-red-500 text-red-500";
                } else {
                  buttonClass += "opacity-50";
                }
              } else {
                buttonClass += "border-border hover:border-primary hover:bg-primary/10 cursor-pointer";
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answeredQuestions[currentQuestion]}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-left">{answer}</span>
                    {showResultState && isCorrect && (
                      <Icon name="CheckCircle2" className="text-green-500 animate-bounce" size={28} />
                    )}
                    {showResultState && isSelected && !isCorrect && (
                      <Icon name="XCircle" className="text-red-500 animate-pulse" size={28} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        <div className="flex gap-3 justify-center flex-wrap">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                index === currentQuestion
                  ? 'bg-primary text-primary-foreground scale-125 ring-4 ring-primary/30'
                  : answeredQuestions[index]
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-secondary/30 text-muted-foreground'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
