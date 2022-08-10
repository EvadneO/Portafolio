const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      proyecto: {
        id: "",
        name: "",
        purpose: "",
        technology: "",
        link: "",
      },

      proyectos: [],

      experience: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      // Fetch para listar proyectos

      getProyectos: () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify([]);
        fetch(
          "https://3001-4geeksacade-reactflaskh-0hwh2ffzc3u.ws-us59.gitpod.io/user"
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ proyectos: result });
          })
          .catch((error) => console.log("error", error));
      },

      getExperience: () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify([
          {
            id: 1,
            name: "Gerente de tienda. Kentucky Foods Chile.",
            date: "09.2018 – 07.2022",
            function:
              "Ordenes de compra y recepción, inventarios, costos, ventas, trabajo en base a un plan de metas. Administración de recursos humanos.",
            country: "Santiago de Chile.",
          },
          {
            id: 2,
            name: "Asistente Administrativo. Corporación Inter.",
            date: "05.2017 – 04.2018",
            function:
              "Gestión de pagos a proveedores y facturación. Pago de servicios y registros contables y declaraciones de impuestos.",
            country: "Caracas, Venezuela.",
          },
        ]);

        fetch(
          "https://3001-4geeksacade-reactflaskh-0hwh2ffzc3u.ws-us59.gitpod.io/experience"
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setStore({ experience: result });
          })
          .catch((error) => console.log("error", error));
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
