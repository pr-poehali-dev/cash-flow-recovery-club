import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [dso, setDso] = useState("");
  const [revenue, setRevenue] = useState("");
  const [calculatedGain, setCalculatedGain] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculateGain = () => {
    const dsoValue = parseFloat(dso);
    const revenueValue = parseFloat(revenue);
    if (dsoValue && revenueValue) {
      const dailyRevenue = revenueValue / 30;
      const dsoReduction = Math.min(dsoValue * 0.3, 15);
      const gain = dailyRevenue * dsoReduction;
      setCalculatedGain(gain);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/95 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">
            Cash Rescue Club
          </h1>
          <div className="hidden lg:flex gap-8 text-sm">
            {['Как работает', 'Команда', 'Тарифы', 'Кейсы'].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(['how', 'team', 'pricing', 'cases'][i])}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection('contacts')}
          >
            Записаться на диагностику
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Ограниченный набор • Старт через 7 дней
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                Закрываем кассовый разрыв за 30 дней
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Экспресс-диагностика, индивидуальный план на 14 дней, еженедельные воркшопы, сопровождение переговоров с поставщиками и банками
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "План первых 14 дней с конкретными действиями",
                  "Шаблоны переговоров и письма поставщикам",
                  "Доступ к партнёрам по финансированию"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  onClick={() => scrollToSection('contacts')}
                >
                  Записаться на бесплатную диагностику
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 border-2"
                  onClick={() => scrollToSection('pricing')}
                >
                  Оплатить участие
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Гарантия: 60 дней сопровождения или возврат/продление при выполнении рекомендаций
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-muted/30 rounded-t-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon name="Users" size={80} className="text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Команда экспертов: CFO, юрист, финансовый менеджер, психолог</p>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-4 gap-4 text-center border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-primary">120+</div>
                    <div className="text-xs text-muted-foreground">Компаний</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">87%</div>
                    <div className="text-xs text-muted-foreground">Успеха</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">14</div>
                    <div className="text-xs text-muted-foreground">Дней план</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">60</div>
                    <div className="text-xs text-muted-foreground">Дней поддержки</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-center">
            Кому мы уже помогли
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Реальные результаты компаний, прошедших программу
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                company: "Производство упаковки", 
                was: "Разрыв 4,2 млн", 
                became: "Профицит 1,8 млн за 28 дней",
                metric: "DSO 67 → 42 дня"
              },
              { 
                company: "IT-аутсорсинг", 
                was: "Задержка зарплат 3 мес", 
                became: "Стабильный график выплат",
                metric: "Отток персонала 40% → 8%"
              },
              { 
                company: "Розничная сеть", 
                was: "Разрыв 2,1 млн", 
                became: "Рефинансирование на выгодных условиях",
                metric: "Высвобождено 3,5 млн"
              }
            ].map((caseItem, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-accent mb-4">{caseItem.company}</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Было</div>
                      <div className="font-medium">{caseItem.was}</div>
                    </div>
                    <Icon name="ArrowDown" size={20} className="text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Стало</div>
                      <div className="font-medium text-primary">{caseItem.became}</div>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {caseItem.metric}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-12 text-center">
            Как это работает
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Входная диагностика",
                desc: "60–90 минут анализа",
                details: ["Карта кассовых рисков", "Приоритеты", "Быстрые wins"]
              },
              {
                step: "2",
                title: "План на 14 дней",
                desc: "Конкретные действия",
                details: ["Календарь задач", "Скрипты переговоров", "Шаблоны писем"]
              },
              {
                step: "3",
                title: "Воркшопы + поддержка",
                desc: "Еженедельно",
                details: ["Групповые разборы", "Чат-поддержка 24/7", "Психолог в команде"]
              },
              {
                step: "4",
                title: "Сопровождение",
                desc: "Реальная помощь",
                details: ["Переговоры с банками", "Партнёры по финансированию", "Юридическое сопровождение"]
              }
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-0 right-0 text-8xl font-black text-primary/5 -mt-4 -mr-4">
                  {item.step}
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-black text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, j) => (
                      <li key={j} className="text-sm flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-center">
            Что входит в первый месяц
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Конкретные инструменты и поддержка для выхода из кассового разрыва
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Calendar", title: "План 14 дней", desc: "Детальный календарь с задачами и дедлайнами" },
              { icon: "Users", title: "2–4 воркшопа", desc: "Групповые разборы реальных кейсов" },
              { icon: "Video", title: "1 индивидуальный разбор", desc: "Персональная сессия с экспертом" },
              { icon: "FileText", title: "Шаблоны документов", desc: "Письма, таблицы cash-flow, скрипты переговоров" },
              { icon: "MessageSquare", title: "Чат-поддержка", desc: "Ответы на вопросы в течение рабочего дня" },
              { icon: "Handshake", title: "Доступ к партнёрам", desc: "Связь с банками и инвесторами" },
              { icon: "Brain", title: "Поддержка психолога", desc: "Помощь в принятии решений и работе с командой" },
              { icon: "Scale", title: "Юридическое сопровождение", desc: "Консультации по договорам и переговорам" },
              { icon: "TrendingUp", title: "Отчёты по прогрессу", desc: "Еженедельный трекинг показателей" }
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">О роли психолога в программе</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    В клубе работает сертифицированный психолог, который помогает владельцам и ключевым сотрудникам справиться со стрессом, 
                    принимать хладнокровные решения и выстраивать коммуникацию в кризисе. 1 групповая сессия в месяц + индивидуальные консультации 
                    по запросу (включено в Core/VIP, опционно платно для Entry).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-12 text-center">
            План действий — первые 14 дней
          </h2>

          <div className="space-y-4">
            {[
              { day: "День 1–2", task: "Экспресс-диагностика и карта рисков", result: "Понимание точек разрыва и приоритетов" },
              { day: "День 3–4", task: "Анализ дебиторки и переговоры с должниками", result: "План взыскания, шаблоны писем" },
              { day: "День 5–6", task: "Реструктуризация кредиторки", result: "Новые условия с 2–3 ключевыми поставщиками" },
              { day: "День 7", task: "Первый воркшоп: управление cash-flow", result: "Настроенная таблица прогноза на 90 дней" },
              { day: "День 8–9", task: "Подготовка к переговорам с банком", result: "Досье, финмодель, скрипт переговоров" },
              { day: "День 10–11", task: "Оптимизация издержек: быстрые wins", result: "Экономия 10–15% операционных расходов" },
              { day: "День 12–13", task: "Работа с партнёрами по финансированию", result: "2–3 предложения на рассмотрении" },
              { day: "День 14", task: "Контрольная точка и корректировка плана", result: "Отчёт, следующие шаги, чек-лист на месяц" }
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">
                      {item.day}
                    </Badge>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{item.task}</h3>
                      <p className="text-sm text-muted-foreground">→ {item.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-center">
            Тарифы — выберите подходящий
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Все тарифы включают базовый доступ к программе и материалам
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Entry",
                price: "от 10 000",
                period: "/месяц",
                description: "Для самостоятельной работы с поддержкой",
                features: [
                  "Доступ к библиотеке материалов",
                  "1 еженедельный групповой воркшоп",
                  "Чат-поддержка (ответ в течение дня)",
                  "Групповой разбор 1:many",
                  "Шаблоны и таблицы",
                  "Психолог опционно (доплата)"
                ],
                cta: "Записаться",
                highlight: false
              },
              {
                name: "Core",
                price: "от 50 000",
                period: "/месяц",
                description: "Рекомендуем для быстрого результата",
                features: [
                  "Всё из Entry +",
                  "Экспресс-аудит 60–90 минут",
                  "1 индивидуальная сессия/месяц",
                  "Приоритет в чате (ответ в течение часа)",
                  "Доступ к партнёрам по финансированию",
                  "2 персональных разбора",
                  "1 сессия с психологом включена",
                  "Сопровождение переговоров"
                ],
                cta: "Получить демо-аудит",
                highlight: true
              },
              {
                name: "VIP",
                price: "от 300 000",
                period: "/месяц",
                description: "Максимальное сопровождение",
                features: [
                  "Всё из Core +",
                  "Еженедельные 1:1 сессии",
                  "Персональный финансовый менеджер",
                  "Персональный юрист в команде",
                  "Сопровождение всех переговоров",
                  "Приоритетное подключение к финансированию",
                  "Психологические сессии без ограничений",
                  "Доступ к закрытым мероприятиям",
                  "Консьерж-сервис"
                ],
                cta: "Записаться на звонок",
                highlight: false
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`${plan.highlight ? 'border-primary border-2 shadow-lg shadow-primary/20 scale-105' : 'border-border'} bg-card relative`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground border-0 px-4 py-1">
                      Рекомендуем
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlight ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                    size="lg"
                    onClick={() => scrollToSection('contacts')}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-muted/50 border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-center">Гарантия и условия</h3>
              <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                При выполнении рекомендаций и предоставлении запрошенных данных гарантируем 60 дней сопровождения. 
                Если за первые 30 дней вы не увидите положительной динамики в управлении cash-flow — продлим сопровождение 
                на месяц бесплатно или вернём деньги. Все данные защищены NDA. При работе с партнёрами по финансированию 
                могут потребоваться отдельные договоры.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-center">
            Калькулятор выгоды
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Посчитайте, сколько cash вы сможете высвободить за 30 дней
          </p>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Текущий DSO (дни)</label>
                  <Input 
                    type="number"
                    placeholder="45"
                    value={dso}
                    onChange={(e) => setDso(e.target.value)}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Days Sales Outstanding — средний срок погашения дебиторки</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Месячная выручка (₽)</label>
                  <Input 
                    type="number"
                    placeholder="5000000"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Средняя выручка за последние 3 месяца</p>
                </div>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 mb-6"
                size="lg"
                onClick={calculateGain}
              >
                Рассчитать потенциал
              </Button>

              {calculatedGain !== null && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-2">Потенциальный прирост cash за 30 дней:</p>
                  <p className="text-4xl font-black text-primary mb-4">
                    {calculatedGain.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    При сокращении DSO на 30% (до 15 дней максимум)
                  </p>
                  <Button 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => scrollToSection('contacts')}
                  >
                    Записаться на диагностику
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-center">
            Кто с вами работает
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Команда экспертов с реальным опытом антикризисного управления
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Михаил Соколов",
                role: "CFO, руководитель программы",
                achievement: "Провёл реструктуризацию 80+ компаний на сумму более 2 млрд ₽",
                icon: "Briefcase"
              },
              {
                name: "Елена Морозова",
                role: "Финансовый менеджер",
                achievement: "Сократила DSO в среднем на 18 дней для 40+ клиентов",
                icon: "TrendingUp"
              },
              {
                name: "Дмитрий Лебедев",
                role: "Корпоративный юрист",
                achievement: "15 лет опыта в переговорах с кредиторами и судебных разбирательствах",
                icon: "Scale"
              },
              {
                name: "Анна Волкова",
                role: "Бизнес-психолог",
                achievement: "Сертифицированный психолог, 200+ сессий с владельцами в кризисе",
                icon: "Heart"
              }
            ].map((member, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} size={40} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {member.achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-black mb-12 text-center">
            Частые вопросы
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "У нас нет финансового директора. Справимся?",
                a: "Да, большинство наших клиентов работают без CFO. Мы даём готовые инструменты и помогаем внедрить их — от шаблонов до личного сопровождения. В тарифе VIP можно подключить персонального финансового менеджера."
              },
              {
                q: "Что, если мы не видим улучшений?",
                a: "При выполнении рекомендаций и предоставлении данных гарантируем результат. Если за 30 дней динамика не улучшится — продлим сопровождение бесплатно на месяц или вернём деньги."
              },
              {
                q: "Как безопасно передавать финансовые данные?",
                a: "Работаем по NDA, все данные передаются через защищённые каналы. Юридическое сопровождение включено. Вы контролируете, какую информацию предоставляете на каждом этапе."
              },
              {
                q: "Сколько времени это займёт у нашей команды?",
                a: "Первая диагностика — 60–90 минут. Далее 2–3 часа в неделю на воркшопы и выполнение рекомендаций. Основную работу делаем мы: готовим документы, ведём переговоры, настраиваем процессы."
              },
              {
                q: "Зачем нужен психолог в финансовом клубе?",
                a: "Кассовый разрыв — это не только про цифры, но и про стресс, эмоциональные решения, конфликты в команде. Психолог помогает принимать взвешенные решения, сохранять продуктивность команды и доводить меры до исполнения. Это ускоряет выход из кризиса."
              },
              {
                q: "Можно ли начать с минимального тарифа и перейти на другой?",
                a: "Конечно. Можете стартовать с Entry и в любой момент апгрейдиться до Core или VIP. Разницу доплатите пропорционально оставшемуся времени."
              }
            ].map((faq, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 text-base px-6 py-2">
              Набор завершится через 7 дней • Осталось 12 мест
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black mb-6">
              Записаться на бесплатную диагностику
            </h2>
            <p className="text-xl text-muted-foreground">
              Бонусы при записи сегодня: приоритет по подбору финансирования + 2 индивидуальных разбора
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input 
                      type="text"
                      placeholder="Ваше имя"
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      className="bg-background"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Выручка за последний месяц (₽)</label>
                  <Input 
                    type="text"
                    placeholder="5 000 000"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Кратко о проблеме</label>
                  <Textarea 
                    rows={4}
                    placeholder="Опишите текущую ситуацию: размер разрыва, срочность, что уже пробовали..."
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-lg"
                  size="lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку и получить бонус
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Мы свяжемся в течение рабочего дня. Конфиденциально, NDA по запросу
                </p>
              </form>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-bold mb-6 text-center">Связаться напрямую</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: "Mail", label: "Email", value: "info@cashrescue.club" },
                    { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                    { icon: "MessageCircle", label: "Telegram", value: "@cashrescue" }
                  ].map((contact, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{contact.label}</div>
                        <div className="font-medium text-sm">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Cash Rescue Club</h3>
              <p className="text-sm text-muted-foreground">
                Профессиональная помощь в выходе из кассового разрыва за 30 дней
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">Программа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('how')} className="hover:text-primary transition-colors">Как работает</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Тарифы</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Команда</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('cases')} className="hover:text-primary transition-colors">Кейсы</button></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оферта</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@cashrescue.club</li>
                <li>+7 (495) 123-45-67</li>
                <li>@cashrescue</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Cash Rescue Club. Все права защищены. ООО "Финансовый Консалтинг" ИНН 7701234567</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
