import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            КассаКлуб
          </h1>
          <div className="hidden md:flex gap-6">
            {['О клубе', 'Программа', 'Тарифы', 'Отзывы', 'Контакты'].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(['about', 'program', 'pricing', 'reviews', 'contacts'][i])}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={() => scrollToSection('contacts')}
          >
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift bg-[length:200%_200%]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 text-base px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50">
              💰 Финансовая свобода для предпринимателей
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Выход из кассового<br />разрыва за 30 дней
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Присоединяйся к клубу Артема Асриева и научись управлять денежными потоками как профессионал
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:scale-105 transition-all"
                onClick={() => scrollToSection('pricing')}
              >
                <Icon name="Rocket" className="mr-2" size={24} />
                Начать обучение
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-muted"
                onClick={() => scrollToSection('program')}
              >
                Узнать программу
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20 animate-slide-up">
            {[
              { icon: "TrendingUp", title: "Рост прибыли", desc: "До 300% за первые 3 месяца" },
              { icon: "Shield", title: "Финансовая защита", desc: "Система контроля разрывов" },
              { icon: "Users", title: "Поддержка 24/7", desc: "Комьюнити единомышленников" }
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            О клубе
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Сообщество предпринимателей, которые контролируют свои финансы</h3>
              <p className="text-lg text-muted-foreground mb-6">
                КассаКлуб — это не просто обучение. Это система, которая позволяет раз и навсегда избавиться от кассовых разрывов и построить предсказуемый денежный поток.
              </p>
              <div className="space-y-4">
                {[
                  "Проверенная методология на 500+ бизнесах",
                  "Персональный план выхода из кризиса",
                  "Закрытое комьюнити предпринимателей",
                  "Еженедельные разборы реальных кейсов"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <CardContent className="p-8">
                <div className="aspect-square bg-muted/50 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Building2" size={120} className="text-primary/50" />
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-black text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Выпускников</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-secondary">98%</div>
                    <div className="text-sm text-muted-foreground">Успеха</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-accent">30</div>
                    <div className="text-sm text-muted-foreground">Дней курса</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 order-2 md:order-1">
              <CardContent className="p-8">
                <div className="aspect-square bg-muted/50 rounded-2xl flex items-center justify-center">
                  <Icon name="User" size={120} className="text-accent/50" />
                </div>
              </CardContent>
            </Card>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Артем Асриев
              </h2>
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Эксперт по финансам и управлению денежными потоками</h3>
              <div className="space-y-4 text-lg">
                <p>
                  15 лет опыта в финансовом консалтинге и помощи бизнесам в выходе из кризисных ситуаций.
                </p>
                <p>
                  Автор уникальной методики управления кассовыми разрывами, которая помогла более 500 предпринимателям стабилизировать финансовое положение.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Финансовый аналитик', 'Бизнес-консультант', 'Спикер'].map((tag, i) => (
                    <Badge key={i} className="text-base px-4 py-2 bg-gradient-to-r from-accent/20 to-primary/20 border-accent/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Программа обучения
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { week: "Неделя 1", title: "Диагностика", desc: "Анализ текущего финансового состояния, выявление точек разрыва", icon: "Search" },
              { week: "Неделя 2", title: "Оптимизация", desc: "Сокращение издержек, реструктуризация долгов", icon: "Settings" },
              { week: "Неделя 3", title: "Стратегия", desc: "Построение системы управления денежными потоками", icon: "Target" },
              { week: "Неделя 4", title: "Масштабирование", desc: "Инструменты роста без кассовых разрывов", icon: "TrendingUp" },
              { week: "Бонус 1", title: "Инвестиции", desc: "Куда вкладывать прибыль правильно", icon: "DollarSign" },
              { week: "Бонус 2", title: "Автоматизация", desc: "Финансовый учет на автопилоте", icon: "Zap" }
            ].map((module, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-secondary/20 to-accent/20 border-secondary/50">
                      {module.week}
                    </Badge>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={module.icon as any} size={24} className="text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground">{module.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Тарифы и цены
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Старт", 
                price: "29 990", 
                features: ["Доступ к курсу на 3 месяца", "Основные материалы", "Чат поддержки", "Еженедельные вебинары"],
                gradient: "from-primary/10 to-secondary/10",
                border: "border-primary/30"
              },
              { 
                name: "Бизнес", 
                price: "59 990", 
                features: ["Доступ к курсу на 6 месяцев", "Все материалы + бонусы", "Персональные консультации", "Приоритетная поддержка", "Разбор твоего бизнеса"],
                gradient: "from-secondary/20 to-accent/20",
                border: "border-secondary/50",
                popular: true
              },
              { 
                name: "VIP", 
                price: "149 990", 
                features: ["Безлимитный доступ", "Личная работа с Артемом", "Индивидуальный план", "Закрытый клуб VIP", "Доступ ко всем новым курсам", "Нетворкинг события"],
                gradient: "from-accent/10 to-primary/10",
                border: "border-accent/30"
              }
            ].map((plan, i) => (
              <Card key={i} className={`bg-gradient-to-br ${plan.gradient} ${plan.border} border-2 hover:scale-105 transition-all relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-secondary to-accent text-white border-0 px-4 py-1">
                      🔥 Популярный
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-xl text-muted-foreground"> ₽</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-secondary to-accent' : 'bg-primary'} hover:opacity-90`}
                    size="lg"
                    onClick={() => scrollToSection('contacts')}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Отзывы участников
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Елена К.", role: "Владелица салона красоты", text: "За месяц закрыла кассовый разрыв в 800 тысяч. Теперь финансы под полным контролем!", rating: 5 },
              { name: "Дмитрий М.", role: "IT-стартап", text: "Артем помог выстроить систему так, что мы выросли в 3 раза без долгов. Рекомендую!", rating: 5 },
              { name: "Анна С.", role: "Онлайн-магазин", text: "Курс окупился за первую же неделю. Инсайты просто бомба! Спасибо команде!", rating: 5 },
              { name: "Максим Р.", role: "Ресторатор", text: "Думал закрывать бизнес, но методика Артема спасла. Теперь снова в плюсе!", rating: 5 },
              { name: "Ольга В.", role: "Производство", text: "Наконец-то понимаю, куда уходят деньги. Структура и порядок в финансах!", rating: 5 },
              { name: "Игорь Л.", role: "Консалтинг", text: "Лучшее вложение в бизнес за последние годы. Все четко, понятно, по делу.", rating: 5 }
            ].map((review, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Готов начать путь к финансовой свободе?
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставь заявку, и мы свяжемся с тобой в течение 24 часов
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип бизнеса</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Интернет-магазин, салон, производство..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Расскажите о своей ситуации..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 hover:scale-105 transition-all"
                  size="lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-bold mb-6 text-center">Связаться с нами</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: "Mail", label: "Email", value: "info@kassaklub.ru" },
                    { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                    { icon: "MessageCircle", label: "Telegram", value: "@kassaklub" }
                  ].map((contact, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="font-medium">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КассаКлуб
              </h3>
              <p className="text-muted-foreground">
                Выход из кассового разрыва за 30 дней с Артемом Асриевым
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О клубе</button></li>
                <li><button onClick={() => scrollToSection('program')} className="hover:text-primary transition-colors">Программа</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Тарифы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                {['Instagram', 'Youtube', 'MessageCircle'].map((social, i) => (
                  <a 
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Icon name={social as any} size={20} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2025 КассаКлуб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;