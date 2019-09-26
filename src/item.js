import cuid from 'cuid';

const validateName = function(name) {
  if (!name) throw new TypeError('Name must not be blank');
};

const create = function(name) {
  return {
    // eslint-disable-next-line no-undef
    id: cuid(),
    name,
    checked: false
  };
};

export default {
  validateName,
  create
};