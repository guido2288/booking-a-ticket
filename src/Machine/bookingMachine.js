import { assign, createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets ",
  initial: "inicial",
  context: {
    passengers: [],
    selectedCountry: ""
  },
  states: {
    inicial: {
      on: {
        START: {
          target:"search",
        },
      },
    },
    search: {
      on: {
        CONTINUE: {
          target:'passengers',
          actions: assign({
            selectedCountry: (context, event) => event.selectedCountry
          })
        },
        CANCEL: 'inicial'
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: {
          target:"inicial",
          actions: assign({
            selectedCountry:"",
            passengers:[]
          }),
        },
        ADD: {
          target: 'passengers',
          actions: assign(
            (context, event) => context.passengers.push(event.newPassengers)
          )
        },
        REMOVE: {
          target: 'passengers',
          actions: assign(
            (context, event) => context.passengers = context.passengers.filter(pasanger => event.newPassengers !== pasanger)
          )
        }
      },
    },
    tickets: {
      on: {
        FINISH: "inicial",
      },
    },
  }
});

export default bookingMachine;