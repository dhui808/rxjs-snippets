import { from, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';

const fun1 = () => of("Fun1");
const fun2 = () => of("Fun2");
const fun3 = () => of("Fun3");

const observable = from(of(1)).pipe(
  switchMap(_ => fun1()),
  switchMap(_ => fun2()),
  switchMap(_ => fun3()),
);

observable.subscribe({
  next: val => console.log("Val =", val),
  error: err => console.log("Error = ", err),
  complete: () => console.log("Completed")
});