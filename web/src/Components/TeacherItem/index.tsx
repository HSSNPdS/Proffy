import React from 'react';

import Whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface teacher{
  id: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  subject: string,
  cost: number,
}

interface teacherItemsProps{
  teacher: teacher,
}

const TeacherItem: React.FC<teacherItemsProps> = ({ teacher }) => {

  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return(
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a target='_blank' onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} type="button">
          <img src={Whatsapp} alt="whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;