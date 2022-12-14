class Greeter{
  constructor (name){
    this.name = name
  }

  getGreeting() {
    if(this.name === undefined){
      return "Hello, no name"
    } 
    return "Hello, " + this.name
  }

  showGreeting(greetingMessage){
    console.log(greetingMessage)
  }

  greet(){
    this.showGreeting(this.getGreeting)
  }
}

const g = new Greeter("Patch")


class DelayedGreeter extends Greeter{
  delay = 2000

  constructor(name, delay){
    super(name)
    if (delay !== undefined){
      this.delay = delay
    }
  }

  greet(){
    setTimeout(
      () => {
        this.showGreeting(this.getGreeting())
      }, this.delay
    )  
  }

}