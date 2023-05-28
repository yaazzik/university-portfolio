'use client'

import Accordion from "react-bootstrap/Accordion";

export default function ProgramSem56() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='m-5 text-center'>Программирование</h3>
      <h3 className='m-5 text-center'>5 Семестр</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Написать функцию squareSequenceDigit(), где решалась бы следующая задача. Найти n-ю цифру последовательности из квадратов целых чисел: 149162536496481100121144...
                Например, 2-я цифра равна 4, 7-я 5, 12-я 6. Использовать операции со строками в этой задаче запрещается.</p>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" href="https://github.com/python-basic/sem5-lr1-yaazzik" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Лабораторная работа 2</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Написать реализацию функции get_weather_data(place, api_key=None), в которой необходимо получить данные о погоде с сайта https://openweathermap.org/.
              <br/>
              Функция должна возвращать объект в формате JSON, включающий:
              <br/>
              ☑ информацию о названии города (в контексте openweathermap),<br/>
              ☑ код страны (2 символа),<br/>
              ☑ широту и долготу, на которой он находится,<br/>
              ☑ его временной зоне,<br/>
              ☑ а также о значении температуры (как она ощущается).
              <br/>
              <br/>
              <a href="https://github.com/python-basic/sem5-lr2-yaazzik" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Лабораторная работа 3</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Реализация удаленного импорта <br/>
              Разместите представленный ниже код локально на компьютере и реализуйте механизм удаленного импорта. Продемонстрируйте в виде скринкаста или в текстовом отчете с несколькими скриншотами работу удаленного импорта.
              <br/>
              <br/>
              <a href="https://github.com/python-basic/sem5-lr3-yaazzik" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Лабораторная работа 4</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Разработать функцию, возвращающую элементы ряда Фибоначчи по данному максимальному значению.
              <br/>
              Создание программы, возвращающей список чисел Фибоначчи с помощью итератора.
              <br/>
              Разработать функцию, возвращающую список чисел ряда Фибоначчи с использованием бесконечных итераторов (модуль itertools).
              <br/>
              Создание программы с классическим генератором (использовать yield).
              <br/>
              <br/>
              <a href="https://replit.com/@yaazzik/GenuineVioletredComputeranimation#main.py" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Лабораторная работа 5</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Получить данные о погоде за 5 последних дней и визуализировать эти данные, используя диаграмму рассеяния (scatterplot). Затем, посчитать среднюю температуру за каждый день и построить рядом (на этом же изображении) линейную диаграмму изменения температур.
              <br/>
              <br/>
              <a href="https://colab.research.google.com/drive/1oYqxWUIDJe1h3uGQeKDF4V_ddeOQeJq2?usp=sharing" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Лабораторная работа 6</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Примените паттерн одиночка к функции получения валют и протестируйте получившийся код (при применении шаблона у вас не может существовать более одного инстанса объекта, к которому вы применили паттерн).
              <br/>
              <br/>
              <a href="https://replit.com/@yaazzik/DistinctRareBundledsoftware-API#main.py" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Лабораторная работа 7</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Примените паттерн декоратор и реализуйте объектно-ориентированную версию программы получения курсов валют с сайта Центробанка таким образом, чтобы:
              <br/>
              было возможно использовать базовую версию для получения информации о валютах (возвращает словарь со структурой, описанной в одной из предыдущих лабораторных работ) (class CurrenciesList);
              <br/>
              было возможно применить декоратор к базовой версии и получить данные в формате JSON (class ConcreteDecoratorJSON);
              <br/>
              было возможно использовать декоратор к базовой версии (CurrenciesList) или к другому декоратору (ConcreteDecoratorJSON) и получить данные в формате csv (class ConcreteDecoratorCSV).
              <br/>
              <br/>
              <a href="https://replit.com/@yaazzik/IndolentTotalMice#main.py" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Лабораторная работа 9</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Вывести на графике 10 валют (получить по кодам валюты из ЦБС)
              <br/>
              Переписать лямбда-функцию из следующей строки через list comprehension или генераторы списков (как мы их называем)
              <br/>
              Подписи должны быть у осей (x, y), у графика, у «рисок» (тиков), столбцы должны быть разных цветов с легендой
              <br/>
              Нарисовать отдельный график с колебанием одной (выбранной вами) валюты (получить данные с сайта ЦБ за год) и отобразить его наиболее оптимальным образом (типом графика) Отобразить это на одном изображении (2 графика)
              <br/>
              <br/>
              <a href="https://colab.research.google.com/drive/1fe4j5uuXUHbFsIevYeumLX32OohJOoRz?usp=sharing" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>


      <h3 className='m-5 text-center'>6 Семестр</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1-2</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Реализовать содержимое функций, декларированных в репле: https://replit.com/@zhukov/ClassicIntelligentEvaluations
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" href="https://replit.com/@yaazzik/PROG6-1#main.py" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Лабораторная работа 3-4</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Выполните все задания и сделайте тесты для каждой написанной функции как показано в примере.
              <br/>
              Для вычисления заданий 3, 4, 5, 6, 7, 8 используйте тип данных float с точностью два знака в дробной части.
              <br/>
              Часть 2. Для набора данных из лабораторной работы 1 посчитать средние значения, медианы, максимальные и минимальные значения для столбцов Offline Spend, Online Spend.
              <br/>
              Результаты работы опубликовать в виде бордов на repl.it и/или Colab.
              <br/>
              <br/>
              <a href="https://replit.com/@yaazzik/sem6-t1-lr2" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Лабораторная работа 5</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              1. Реализовать модели степени полинома 2, 3, 5, 10, 20
              <br/>
              2. Посчитать для каждой из них метрику ошибки MSE и дать характеристику того, что получилось.
              <br/>
              3. Визуализировать каждую модель на графике так, чтобы это было отображено на одной координатной плоскости.
              <br/>
              <br/>
              <a href="https://colab.research.google.com/drive/1OrH0UrC-A5MncI6q_CJ677JNV28qp2fH?usp=sharing" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Лабораторная работа 6</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              На основе кода ниже и данных, размещенных выше, реализуйте:
              <br/>
              Визуализацию данных.
              <br/>
              Линейную модель, которая учитывала бы только размер жилья.
              <br/>
              Полиномиальную модель (степени 2 и 3), учитывающую только размер жилья.
              <br/>
              Линейную модель (с помощью scikit-learn), которая учитывала бы размер жилья и количество комнат
              <br/>
              Предскажите значения для двух объектах недвижимости с использованием этих трех моделей: 1650,3; 2200,4.
              <br/>
              В ответе к лабораторной работе и в колабе представьте предсказанные значения стоимости объектов недвижимости для всех построенных моделей.
              <br/>
              Оцените ошибку для созданных моделей. Опишите какая ошибка больше, а какая меньше и укажите причину.
              <br/>
              <br/>
              <a href="https://colab.research.google.com/drive/1K5QIhwRNG1ISWndABlutAD8GOs5XMCm6?usp=sharing" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
  </div>
  )
}
