export const getTypeContentLink = (link) => {
  if (link.endsWith('.svg') || link.endsWith('.png') || link.endsWith('.jpg')) {
    return 'image';
  } else if (link.search(/[a-z]*@[a-z]\.(com|ru)/gi) !== -1) {
    return 'email';
  } else {
    return 'text';
  }
};

export const validateForm = (input) => {
  const { type, value } = input;

  if (type === 'text') {
    if (value.length >= 2 && value.search(/[^a-z]+/gi) === -1) {
      input.classList.add('success');
      input.classList.remove('error');
      input.dataset.success = 'true';
    } else if (value.length > 0 && value.length < 2) {
      input.classList.add('error');
      input.classList.remove('success');
    } else {
      input.classList.remove('error');
      input.classList.remove('success');
    }
  }

  // 9092585583
  if (type === 'tel') {
    if (value.length >= 10 && value.search(/[^0-9]+/gi) === -1) {
      input.classList.add('success');
      input.classList.remove('error');
      input.dataset.success = 'true';
    } else if (value.length && value.length < 10) {
      input.classList.add('error');
      input.classList.remove('success');
      input.dataset.success = 'false';
    } else {
      input.classList.remove('error');
      input.classList.remove('success');
      input.dataset.success = 'false';
    }
  }

  // vano-sh@mail.ru || .com || .by
  // @yandex.ru @gmail.com @mail.ru
  // [a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)

  if (type === 'email') {
    if (value.length >= 9 && value.search(/[a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)+/gi) !== -1) {
      input.classList.add('success');
      input.classList.remove('error');
      input.dataset.success = 'true';
    } else if (
      (value.length && value.length < 9) ||
      value.search(/[a-z0-9\.]+@[a-z]{4,6}\.(ru|com|by)+/gi) === -1
    ) {
      input.classList.add('error');
      input.classList.remove('success');
      input.dataset.success = 'false';
    } else {
      input.classList.remove('error');
      input.classList.remove('success');
      input.dataset.success = 'false';
    }
  }
};
