export const HASHTAG_REGEX = /\W(#[а-яa-z]+\b)(?!;)/gmi;

export const isHashtagValid = (value) => value.length <= 20 && !HASHTAG_REGEX.test(value);
