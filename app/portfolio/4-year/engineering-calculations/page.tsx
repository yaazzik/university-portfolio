'use client'

import Accordion from "react-bootstrap/Accordion";

export default function EngineeringCalculations() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>Научные и инженерные расчеты</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Лабораторная работа 1</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Дисперсионный анализ.</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9B%D0%A01%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&name=%D0%9B%D0%A01%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Лабораторная работа 2</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Двухфакторный дисперсионный анализ.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9B%D0%A02%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&name=%D0%9B%D0%A02%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Лабораторная работа 3</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Средние величины.</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9B%D0%A03%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&name=%D0%9B%D0%A03%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Лабораторная работа 4</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Показатели вариации.</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9B%D0%A04%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&name=%D0%9B%D0%A04%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Лабораторная работа 5</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Теоретические частоты для нормального распределения. Критерий Колмогорова.</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9B%D0%A05%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&name=%D0%9B%D0%A05%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Лабораторная работа 6</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Ряды динамики.</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fvah2w70OIN2JAwtFlqO9EzzuQ0bpVfq3z3bkE%2BWyncypmOtfui8U2ec0OLRkKdJRq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9B%D0%A06%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&name=%D0%9B%D0%A06%20%D0%98%D0%A1%D0%B8%D0%A2%D0%9D%D0%B8%D0%98%D0%A0%20%D0%93%D0%BB%D0%B5%D0%B1%D0%BE%D0%B2%20%D0%9C.%D0%94..xlsx&nosw=1" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
