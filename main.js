class PubSubClass {
    constructor(){
        this.events = [];
    }

    // Add Method
    subscribe(eventName, fn){
        this.events.push({eventName, fn});
    }

    // Remove Method
    unsubscribe(eventName){
        this.events = this.events.filter(event => event.eventName !== eventName)
    }

    // Emit Method
    publish(eventName){
        for (let event of this.events){
            if (event.eventName === eventName) {
                event.fn();
            }
        }
    }
}

const pubsub = new PubSubClass();
pubsub.subscribe("sayHello", () => {console.log("Hello World !")});
pubsub.subscribe("sayHi", () => {console.log("Hi!")});
pubsub.subscribe("sayBye", () => {console.log("Bye !")});

pubsub.publish("sayHello");
pubsub.publish("sayHi");
pubsub.publish("sayBye");

pubsub.unsubscribe("sayHi");
console.log(pubsub);