export const formTemplate = `
<form id="add-form">
 <h3>Отзыв:</h3>
 <input type="text" placeholder="Укажите ваше имя" name="author"><br><br>
 <input type="text" placeholder="Укажите место" name="place"><br><br> 
 <textarea placeholder="Оставить отзыв" name="review"></textarea><br><br>
 <button id="add-btn">Добавить</button><br>
</form>
`

export const reviewTemplate = review => {
  return `
    <div class="review">
      <div><strong>${review.author}</strong></div>
      <div>${review.place}</div>
      <div>${review.reviewText}</div>
    </div>
  `
}