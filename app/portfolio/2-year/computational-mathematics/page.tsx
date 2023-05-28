'use client'

import Accordion from "react-bootstrap/Accordion";

export default function CompMath() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>Вычислительная математика</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Численное интегрирование.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%2F%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%20%D0%9B%D0%A01.docx&name=%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%20%D0%9B%D0%A01.docx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Лабораторная работа 2</Accordion.Header>
            <Accordion.Body className="text-green-500 bg-black">
              <p>Элементарные функции</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%2F%D0%9B%D0%A02%20%D0%92%D1%8B%D1%87%D0%BC%D0%B0%D1%82%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20.docx&name=%D0%9B%D0%A02%20%D0%92%D1%8B%D1%87%D0%BC%D0%B0%D1%82%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20.docx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Лабораторная работа 3</Accordion.Header>
            <Accordion.Body className="text-green-500 bg-black">
              <p>Элементарные функции</p>
              <br/>
              <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%2F%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%20%D0%9B%D0%A03%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf&name=%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%20%D0%9B%D0%A03%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..pdf&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Лабораторная работа 4</Accordion.Header>
            <Accordion.Body className="text-green-500 bg-black">
              <p>Численное методы решения нелинейных уравнений.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%2F%D0%9B%D0%A0%204%20%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..docx&name=%D0%9B%D0%A0%204%20%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..docx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4 ">
            <Accordion.Header>Лабораторная работа 5</Accordion.Header>
            <Accordion.Body className="text-green-500 bg-black">
              <p>Интерполирование функций.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F2%20%D0%BA%D1%83%D1%80%D1%81%2F%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%2F%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BF%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D1%8F%20%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20.docx&name=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BF%D0%BE%D0%BB%D1%8F%D1%86%D0%B8%D1%8F%20%D0%92%D1%8B%D1%87%D0%9C%D0%B0%D1%82%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94.%20.docx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
