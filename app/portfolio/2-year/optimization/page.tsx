'use client'

import Accordion from "react-bootstrap/Accordion";

export default function Optimization() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>Информационные технологии в решении задач оптимизации</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Системы уравнений.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%9B%D0%A01%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%D0%9C%D0%94.docx&name=%D0%9B%D0%A01%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%D0%9C%D0%94.docx" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
              <Accordion.Header>Лабораторная работа 2</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                    <p>Оптимальное решение.</p>
                    <br/>
                      <br/>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%9B%D0%A02%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%D0%9C%D0%94.docx&name=%D0%9B%D0%A02%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
              <Accordion.Header>Лабораторная работа 3</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                    <p>Симплекс таблица. Базисное решение. Оптимальное решение.</p>
                    <br/>
                      <br/>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%9B%D0%A03%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&name=%D0%9B%D0%A03%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
              <Accordion.Header>Лабораторная работа 4</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                    <p>Метод наименьшей стоимости.</p>
                    <br/>
                      <br/>
                    <div className='flex flex-row items-start'>
                      <a className="bg-green-500 no-underline mr-2 p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%9B%D0%A0%204.1%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.xlsx&name=%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%9B%D0%A0%204.1%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.xlsx&nosw=1" target="_blank">Решение</a>
                      <a className="bg-green-500 no-underline mr-2 p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%9B%D0%A0%204.2%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.xlsx&name=%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%9B%D0%A0%204.2%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.xlsx&nosw=1" target="_blank">Часть 2</a>
                    </div>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
              <Accordion.Header>Лабораторная работа 5</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                    <p>Локальный экстремум функции. Глобальный экстремум функции. Условный экстремум функции.</p>
                    <br/>
                      <br/>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%9B%D0%A05%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&name=%D0%9B%D0%A05%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
              <Accordion.Header>Лабораторная работа 6</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                    <p>Условная и безусловная оптимизация.</p>
                    <br/>
                      <br/>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%9B%D0%A0%206%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&name=%D0%9B%D0%A0%206%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
              <Accordion.Header>Лабораторная работа 7</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                    <p>Матрицы идентичности и смежности.</p>
                    <br/>
                    <br/>
                    <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%9B%D0%A0%207%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&name=%D0%9B%D0%A0%207%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
              <Accordion.Header>Лабораторная работа 8</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                    <p>Минимальный остов дерева графа. Кратчайший путь на графе.</p>
                    <br/>
                    <br/>
                    <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%9B%D0%A0%208%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&name=%D0%9B%D0%A0%208%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
              <Accordion.Header>Лабораторная работа 9</Accordion.Header>
                  <Accordion.Body className="text-green-500 bg-black">
                    <p>Смешанные стратегии.</p>
                    <br/>
                      <br/>
                      <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                         href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%9E%D0%BF%D1%82%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%2F%D0%9B%D0%A0%209%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&name=%D0%9B%D0%A0%209%20%D0%98%D0%A2%D0%A0%D0%97%D0%9E%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C%D0%94.docx&nosw=1" target="_blank">Решение</a>
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
