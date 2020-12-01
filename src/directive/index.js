export default (vue)=>{
  vue.directive('say',{
    inserted: function(el) {
      console.log(el);
    }
  })
}
