import Rx from 'rxjs/Rx';
// Note: test renderer must be required after react-native.


it ('fiuc',() =>{


    var subject = new Rx.ReplaySubject(100);

    subject.filter((obj) => {
        console.log(obj);
        return obj.eventName == 'b';
    }).subscribe({
        next:(v) => {
            console.log(`next ${v}`);
        },
        error:(error) =>{
          console.log(`error ${error}`);
        },
        complete:(v) => {
            console.log(`complete ${v}`);
        }
    });

    subject.filter((obj) => {
        console.log(obj);
        return obj.eventName == 'a';
    }).subscribe({
        next:(v) => {
            console.log(`next ${v}`);
        },
        error:(error) =>{
            console.log(`error ${error}`);
        },
        complete:(v) => {
            console.log(`complete ${v}`);
        }
    });



    subject.next({
        eventName:'a',
        value:'fuck'
    });


});
