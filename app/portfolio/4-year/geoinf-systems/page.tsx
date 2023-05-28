'use client'

import Accordion from "react-bootstrap/Accordion";

export default function GeoinfSystems() {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-5'>Введение в геоинформационные технологии</h3>
      <div className='w-1/2'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Практическая работа</Accordion.Header>
            <Accordion.Body className='text-green-500 bg-black'>
              <p>Карта Ленобласти в MapInfo. Каушта.</p>
              <br/>
              <br/>
              <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                 href="https://disk.yandex.ru/d/lE4GKjSmqIOV7Q" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Зачетная работа</Accordion.Header>
              <Accordion.Body className="text-green-500 bg-black">
                <p>Отчет по работе.</p>
                <br/>
                <br/>
                <a className="bg-green-500 no-underline p-2 rounded text-black hover:bg-green-600"
                   href="https://disk.yandex.ru/i/N5236tXRlPyXzg" target="_blank">Решение</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
