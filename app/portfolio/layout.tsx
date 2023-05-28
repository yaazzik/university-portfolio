'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Link from "next/link";

export default function InterfaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div >
      <main className='bg-black'>
        <header className='z-50 fixed top-0 w-screen flex flex-row justify-between items-center border-2 border-green-500 h-[80px]'>
          <p className='my-auto ml-3 text-green-500 fs-5'>Портфолио Глебова М.Д.</p>
          <div className='flex justify-end'>
            <Dropdown className='mr-6'>
              <Dropdown.Toggle variant="success" id="dropdown-projects">
                Проекты
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/Social_Media'>
                    Блог (в разработке)
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/tg-motivation-bot-front'>
                    Мотивирующие цитаты
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/ToDo_App'>
                    ToDo-приложение
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/chess_react'>
                    Шахматы
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/React_Redux_Base'>
                    Redux state manager
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/React_Redux_Base'>
                    Курсовая работа по ‘Celestia’
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9A%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%B0%D1%8F%2F%D0%9A%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%201.pdf&name=%D0%9A%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%201.pdf&nosw=1'>
                    Курсовая работа ‘Синхронизация маятников’
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/YPP/blob/main/%D0%9A%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%A3%D0%9F%D0%9F%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf'>
                    Курсовая работа ‘Платформер на Unity’
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mr-6'>
              <Dropdown.Toggle variant="success" id="dropdown-1gr">
                1 курс
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/1-year/algorithms-and-complexity-analysis'>
                    Алгоритмы и анализ сложностей
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/1-year/informatics'>
                    Информатика
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/1%20%D0%BA%D1%83%D1%80%D1%81/%D0%98%D0%A2%20%D0%B2%20%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B5'>
                    ИТ в математике
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/1%20%D0%BA%D1%83%D1%80%D1%81/%D0%98%D0%A2%20%D0%B2%20%D0%A4%D0%B8%D0%B7%D0%B8%D0%BA%D0%B5/%D0%98%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5'>
                    ИТ в физике
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/1%20%D0%BA%D1%83%D1%80%D1%81/%D0%9C%D0%B0%D1%82%20%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7'>
                    Математический анализ
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/1%20%D0%BA%D1%83%D1%80%D1%81/%D0%A2%D0%B5%D0%BE%D1%80%D0%92%D0%B5%D1%80'>
                    Теория вероятностей
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/1%20%D0%BA%D1%83%D1%80%D1%81/%D0%9F%D1%80%D0%B0%D1%82%D0%B8%D0%BA%D0%B0%201%20%D0%BA%D1%83%D1%80%D1%81'>
                    Практика
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mr-6'>
              <Dropdown.Toggle variant="success" id="dropdown-2gr">
                2 курс
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/2-year/data-analysis'>
                    Анализ данных
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/2-year/databases'>
                    Базы данных
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/2-year/computational-mathematics'>
                    Вычислительная математика
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/2-year/optimization'>
                    ИТ в решении задач оптимизации
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/2-year/computer-algebra'>
                    Основы компьютерной алгебры
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://yaazzik.github.io/'>
                    Серверные веб-технологии
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/2-year/computer-modeling'>
                    Технологии компьютерного моделирования
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='mr-6'>
              <Dropdown.Toggle variant="success" id="dropdown-3gr">
                3 курс
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/3%20%D0%BA%D1%83%D1%80%D1%81/%D0%91%D0%98'>
                    Бизнес информатика
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/3%20%D0%BA%D1%83%D1%80%D1%81/%D0%98%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B0'>
                    Инженерная графика
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/3%20%D0%BA%D1%83%D1%80%D1%81/%D0%98%D0%A2%20%D0%B8%20%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B8'>
                    ИТ и системы бизнес-аналитики
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/3%20%D0%BA%D1%83%D1%80%D1%81/%D0%9E%D0%9A%D0%AD%D0%9E'>
                    Основы корпоративного электронного обучения
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://disk.yandex.ru/d/4uBDjn_TcWZWGQ/3%20%D0%BA%D1%83%D1%80%D1%81/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B%20%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F'>
                    Основы электронного управления
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/3-year/programming'>
                    Программирование
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/YPP'>
                    Управление программными продуктами
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/Practice-Course_3'>
                    Практика
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='mr-6'>
              <Dropdown.Toggle variant="success" id="dropdown-4gr">
                4 курс
              </Dropdown.Toggle>

              <Dropdown.Menu>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/4-year/geoinf-systems'>
                    Геоинформационные системы
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/4-year/engineering-calculations'>
                    Инженерные и научные расчеты
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/4-year/human-resources'>
                    Оценка персонала
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/4-year/programming'>
                    Программирование
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/4-year/social-and-professional-it-questions'>
                    Соц. и проф. вопросы информатики
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='/portfolio/4-year/it-recruitment'>
                    IT рекрутмент
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/practice-sem7'>
                    Практика
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link className='dropdown-item' href='https://github.com/yaazzik/diploma-practice'>
                    Преддипломная практика
                  </Link>
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>

        <div className='bg-black text-green-500 m-10 mt-[120px] mb-[80px]'>
          {children}
        </div>

        <footer className='fixed bottom-0 w-screen h-10 bg-green-600'>
          <p className='leading-10 ml-5 text-center text-black bg-green-600'>2023 / РГПУ им. А.И.Герцена / ИВТ</p>
        </footer>

      </main>
    </div>

  )
}
