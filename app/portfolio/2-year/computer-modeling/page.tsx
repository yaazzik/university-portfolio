'use client'

import Accordion from "react-bootstrap/Accordion";

export default function ComputerModeling() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>Технологии компьютерного моделирования</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Численные методы решения дифференциальных уравнений</p>
              <p>Контрольный пример 1</p>
              <p>Решить дифференциальное уравнение y’ = y*(1 - x) на отрезке [0; 1] с
                начальными условиями x0= 0, y0= 1</p>
              <p>Контрольный пример 2</p>
              <p>Применяя метод Эйлера (Рунге-Кутта) составить на отрезке [1; 1,5] таблицу
                значений решения уравнения y’’ + y’/x + y = 0 с начальными условиями: y(1) =
                0.77 y’ (1) = - 0.44. Шаг вычисления h = 0.1.</p>
              <p>Контрольный пример 3</p>
              <p>Для системы дифференциальных уравнений
                dy/dt = - 2x + 5z
                dy/dt = sin(t – 1)x – y + 3z
                dz/dt = - x +2z
                с начальными условиями x(0) = 2, y(0) = 1, z(0) = 1 составить таблицу
                значений функций x(t), y(t), z(t) на отрезке [0; 0.3] с шагом h = 0.003.
                Использовать метод Эйлера.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%A2%D0%9A%D0%9C%2F%D0%A2%D0%9A%D0%9C%20%D0%9B%D0%A01%20%D0%BE%D1%82%D1%87%D1%82%D0%B5%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%D0%9C%D0%94.docx&name=%D0%A2%D0%9A%D0%9C%20%D0%9B%D0%A01%20%D0%BE%D1%82%D1%87%D1%82%D0%B5%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
              <Accordion.Header>Лабораторная работа 2</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                      <p>Численные методы решения дифференциальных уравнений</p>
                      <br/>
                      <br/>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%A2%D0%9A%D0%9C%2F%D0%A2%D0%9A%D0%9C%20%D0%9B%D0%A02%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%D0%9C%D0%94.docx&name=%D0%A2%D0%9A%D0%9C%20%D0%9B%D0%A02%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
              <Accordion.Header>Лабораторная работа 3</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                      <p>Корреляционные связи</p>
                      <br/>
                      <br/>
                    <div className='flex flex-row items-start'>
                      <a className="bg-green-500 no-underline mr-2 p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%A2%D0%9A%D0%9C%2F%D0%9B%D0%A0%203%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94%20%D0%A2%D0%9A%D0%9C.xlsx&name=%D0%9B%D0%A0%203%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94%20%D0%A2%D0%9A%D0%9C.xlsx&nosw=1" target="_blank">Решение</a>
                      <a className="bg-green-500 no-underline mr-2 p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%A2%D0%9A%D0%9C%2F%D0%9B%D0%A03%20%D0%A7%D0%B0%D1%81%D1%82%D1%8C%202%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94%20%D0%A2%D0%9A%D0%9C.xlsx&name=%D0%9B%D0%A03%20%D0%A7%D0%B0%D1%81%D1%82%D1%8C%202%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94%20%D0%A2%D0%9A%D0%9C.xlsx&nosw=1" target="_blank">Часть 2</a>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%A2%D0%9A%D0%9C%2F%D0%9B%D0%A03%20%D0%A7%D0%B0%D1%81%D1%82%D1%8C%203%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94%20%D0%A2%D0%9A%D0%9C.xlsx&name=%D0%9B%D0%A03%20%D0%A7%D0%B0%D1%81%D1%82%D1%8C%203%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94%20%D0%A2%D0%9A%D0%9C.xlsx&nosw=1" target="_blank">Часть 3</a>
                    </div>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
              <Accordion.Header>Лабораторная работа 4</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                      <p>Корреляция. Критерий Фишера. Критерий Стьюдента.</p>
                      <br/>
                      <br/>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                            href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%A2%D0%9A%D0%9C%2F%D0%9B%D0%A04%20%D0%A2%D0%9A%D0%9C%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.xlsx&name=%D0%9B%D0%A04%20%D0%A2%D0%9A%D0%9C%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.xlsx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4 ">
              <Accordion.Header>Лабораторная работа 5</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                      <p>Построение и анализ графиков временного ряда</p>
                      <br/>
                      <br/>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%A2%D0%9A%D0%9C%2F%D0%9B%D0%A0%205%20%D0%A2%D0%9A%D0%9C%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.xlsx&name=%D0%9B%D0%A0%205%20%D0%A2%D0%9A%D0%9C%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.xlsx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
