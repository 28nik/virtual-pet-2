// function preload() {
//           milkI = loadImage("../images/Milk.png");
// }
class Food {
          constructor() {
                    this.foodStock = 0;
                    // this.lastFed;
                    this.image = loadImage("images/Milk.png");
          }
          display() {
                    var x = 80, y = 100;
                    imageMode(CENTER);
                    // image(this.image, 720, 220, 70, 70);
                    if (this.foodStock != 0) {
                              for (var i = 0; i < this.foodStock; i++) {
                                        if (i % 10 === 0) {
                                                  x = 80;
                                                  y += 50;
                                        }
                                        image(this.image, x, y, 50, 50);
                                        x += 30
                              }
                    }
          }
          updateFoodStock(food){
                    this.foodStock = food;
                    database.ref('/').update({
                        Food: food
                    });
                }
                getFoodStock(){
                    this.x = database.ref('Food');
                    this.x.on("value",(data)=>{
                        this.foodStock=data.val();
                      })
                }
                deductFood(){
                    this.foodStock-=1;
                    updateFoodStock(this.foodStock);
                }
}