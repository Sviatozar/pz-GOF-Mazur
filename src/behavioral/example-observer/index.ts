import { Observer } from './abstractions/observer';
import { Subject } from './abstractions/subject';
import { ConcreteSubject } from './implementations/subjects/concrete-subject';
import { ConcreteObserverA } from './implementations/observers/concrete-observer-a';
import { ConcreteObserverB } from './implementations/observers/concrete-observer-b';
import { ConcreteObserverC } from './implementations/observers/concrete-observer-c';

const subject = new ConcreteSubject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();
const observerC = new ConcreteObserverC();

// Registering observers
subject.addObserver(observerA);
subject.addObserver(observerB);
subject.addObserver(observerC);

// Changing the subject's state
subject.setState("Hello, World!");

// Output:
// Subject: State changed to "Hello, World!"
// Observer A: Reacting to state change -> Hello, World!
// Observer B: Logging new state: Hello, World!