'use client'

import Accordion from "react-bootstrap/Accordion";

export default function ProgramSem7() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>Программирование 7 Семестр</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Написание программы для численного интегрирования площади под кривой.
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" href="https://replit.com/@yaazzik/prog7-t1-lr1-gl-md?v=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Лабораторная работа 2</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Дополните файл с кодом функции integrate следующим кодом, расположенном по <a href="https://replit.com/@zhukov/sem7-task3#main.py">ссылке</a> (или <a href="https://replit.com/@zhukov/prog7-t1-lr2#main.py">тут</a>) и также проведите замеры времени вычисления для аналогичных параметров модуля timeit для кратного числа потоков и процессов (2, 4, 6).
              <br/>
              <br/>
              <a href="https://replit.com/@yaazzik/prog7-t1-lr2-gl-md#main.py" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Лабораторная работа 3</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Перепишите функцию integrate с использованием Cython.<br/>
              Снова проведите замеры без потоков (аналогично предыдущим заданиям, для n_iter=10**5 и n_iter=10**6) и с потоками, процессами (аналогично для n_iter=10**6): 2, 4, 6.<br/>
              Зафиксируйте замеры.
              <br/>
              <br/>
              <a href="https://replit.com/@yaazzik/prog7-t1-lr3-gl-md#main.py" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Лабораторная работа 4</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Спарсить страницу https://www.herzen.spb.ru/main/structure/inst/ и создать json-файл со списком институтов, где структура файла будет такой:<br/>
                [ "institute_name":"", "url": "", "dep_list":<br/>
                [<br/>
                "dep_name": "кафедра", "head_name":"имя", "email":"почта",<br/>
                ...<br/>
                ],<br/>
                ...<br/>
                ]<br/>

              Дополнить файл с данными, организовав парсинг страниц институтов на сайте https://atlas.herzen.spb.ru/faculty.php. Спарсить список кафедр этого института и дополнить файл информацией о руководителях кафедр этого института: имя и почта.
              <br/>
              <br/>
              <a href="https://colab.research.google.com/drive/1EFBSFIaVC74duBPt3wIlSk9aYCgwmcEE?usp=sharing" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Лабораторная работа 5</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Дан Gist с текстом статьи сэра Тима Бернерса-Ли, оригинал тут: https://www.w3.org/DesignIssues/TimBook-old/History.html<br/>
              Необходимо с использованием библиотеки nltk решить задачу частеречной разметки и найти 5 (пять) наиболее встречаемых частей речи в этом тексте.
              <br/>
              <br/>
              <a href="https://replit.com/@yaazzik/sem7-lr5#main.py" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Лабораторная работа 6</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Спарсить страницу https://www.herzen.spb.ru/main/news/ и с использованием регулярных выражений сохранить все ссылки на новости, расположенные на этой странице.<br/><br/>

              Открыть каждую сохраненную страницу и спарсить основное содержимое новости<br/><br/>

              Обработать текст и сохранить для каждой новости:<br/>
              1. Ключевые термины.<br/>
              2. Ключевых персонажей, упоминавшихся в новости.<br/>
              3. Построить изображение с облаком тегов для извлеченных ключевых терминов и персонажей.
              <br/>
              <br/>
              <a href="https://colab.research.google.com/drive/1XlBnHpPwMmEMdq7xxxSsDdbJskOppOnk?usp=sharing" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Лабораторная работа 7</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              На основе борда https://replit.com/@zhukov/prog7-t3-lr7#simpleapp.py реализуйте flask-приложение "Счетчик" со следующим функционалом:<br/><br/>

              1. по адресу localhost:port/stat - происходит инкремент счетчика и возвращается текущее его значение в виде html-содержимого;<br/>
              2. по адресу localhost:port/about - вызывается функция hello, написанная в борде в текущей версии с добавлением имени и фамилии студента, выполнившего задание;<br/>
              3. Счетчик инициализируется при запуске приложения и его значение хранится в переменной, не сохраняется, если приложение было остановлено.<br/><br/>

              "Упакуйте" приложение в докер-контейнейнер (в качестве основного образа используйте alpine-версию образа python) и опубликуйте в docker hub.
              <br/>
              <br/>
              <a href="https://hub.docker.com/repository/docker/yaazzik/py-simpleapp/general" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Лабораторная работа 8</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Просмотрите ролик данной темы и выполните задание озвученное в конце ролика. Соответствующий ролику борд с кодом расположен по ссылке:<br/>
              <br/>
              <br/>
              <a href="https://replit.com/@zhukov/prog7-t3-lr8#Dockerfile" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>CI/CD Проект</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              Реализовать полностью процесс развертывания какого-либо веб-приложения, созданного в рамках дисциплины "Программирование" с использованием методологии DevOps (CI/CD).
              <br/>
              <br/>
              <a href="https://github.com/yaazzik/tg-motivation-bot-front" className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  </div>
  )
}
