import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.poehali.dev/files/7309805d-ef35-4c06-a6f5-a8ec942731e0.jpg"
                alt="ФВТ ККК Логотип"
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-black">ФВТ ККК</h1>
                <p className="text-sm text-gray-600">Фото- и видеотворчество</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-black hover:text-[#87CEEB] transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-black hover:text-[#87CEEB] transition-colors font-medium"
              >
                О специализации
              </a>
              <a
                href="#portfolio"
                className="text-black hover:text-[#87CEEB] transition-colors font-medium"
              >
                Портфолио
              </a>
              <a
                href="#media"
                className="text-black hover:text-[#87CEEB] transition-colors font-medium"
              >
                Медиа-архив
              </a>
              <a
                href="#contact"
                className="text-black hover:text-[#87CEEB] transition-colors font-medium"
              >
                Связь
              </a>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-r from-white to-gray-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            Создаем визуальные истории
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Специализация «Фото- и видеотворчество» — место где рождаются
            профессиональные фотографы и видеографы
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-[#87CEEB] hover:bg-[#6BB8D6] text-white"
            >
              Смотреть портфолио
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              О специализации
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              О специализации
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наша специализация готовит креативных профессионалов в области
              фото- и видеопродукции
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Camera"
                  size={48}
                  className="mx-auto mb-4 text-[#87CEEB]"
                />
                <CardTitle className="text-black">Фотография</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Изучение основ композиции, света, цвета и современных техник
                  фотосъемки
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Video"
                  size={48}
                  className="mx-auto mb-4 text-[#87CEEB]"
                />
                <CardTitle className="text-black">Видеопродукция</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Создание видеоконтента от концепции до финального монтажа
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Palette"
                  size={48}
                  className="mx-auto mb-4 text-[#87CEEB]"
                />
                <CardTitle className="text-black">Креативность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Развитие художественного вкуса и креативного мышления
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Портфолио студентов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Лучшие работы наших студентов в области фото- и видеотворчества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-[#87CEEB] to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Icon
                      name="Play"
                      size={48}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-black mb-2">
                    Работа студента {i}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Описание творческого проекта и использованных техник
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge
                      variant="outline"
                      className="text-[#87CEEB] border-[#87CEEB]"
                    >
                      {i % 2 === 0 ? "Фото" : "Видео"}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-black hover:text-[#87CEEB]"
                    >
                      Смотреть
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
              Загрузить свою работу
            </Button>
          </div>
        </div>
      </section>

      {/* Media Archive Section */}
      <section id="media" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Медиа-архив</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Фотографии и видео с наших мероприятий, которые вы можете скачать
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Images"
                  size={64}
                  className="mx-auto mb-4 text-[#87CEEB]"
                />
                <CardTitle className="text-black">Фотоархив</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-center">
                  Коллекция фотографий с выставок, мастер-классов и студенческих
                  проектов
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-[#87CEEB] hover:bg-[#6BB8D6] text-white">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать фото
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white"
                  >
                    Просмотр
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Film"
                  size={64}
                  className="mx-auto mb-4 text-[#87CEEB]"
                />
                <CardTitle className="text-black">Видеоархив</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-center">
                  Записи лекций, мастер-классов и документирование творческого
                  процесса
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-[#87CEEB] hover:bg-[#6BB8D6] text-white">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать видео
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white"
                  >
                    Просмотр
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Связь с нами</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Заинтересованы в поступлении или хотите узнать больше о нашей
            специализации?
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={24} className="text-[#87CEEB]" />
              <span>info@college.ru</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={24} className="text-[#87CEEB]" />
              <span>+7 (xxx) xxx-xx-xx</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-[#87CEEB] hover:bg-[#6BB8D6] text-white"
          >
            Связаться с нами
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Специализация «Фото- и видеотворчество». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
