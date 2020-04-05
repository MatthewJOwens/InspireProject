import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
function _drawQuote() {
  let quote = store.State.quote
  let template = /*html*/`
  <p>${quote.body}</p>
  <p>${quote.author}</p>
  `
  document.getElementById("quote").innerHTML = template

}


export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuote)
    QuoteService.getQuote()
  }
}
