import React from 'react';
import PropTypes from 'prop-types';
import s from './Publication.module.css';


const Publication = ({ publication, currentValue }) => (
  <article key={publication.id} className={s.publication}>
    <h2 className={s.title}>
      {currentValue}. {publication.title}
    </h2>
    <p className={s.text}>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  currentValue: PropTypes.number.isRequired,
  publication: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
