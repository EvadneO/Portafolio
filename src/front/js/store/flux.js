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

      proyectos: [
        {
          id: 2,
          link: "https://github.com/EvadneO/Star-Wars",
          name: "Blog Star-Wars",
          purpose:
            "Crear un blog con React, en el que se pueda ver detalle y agregar a favoritos, diferentes vistas.",
          technology: "React, Bootstrap, HTML y CSS.",
          img: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298386395_10220435834755803_94189502412065803_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Jw0n0aZEnMUAX_FdOn6&_nc_ht=scontent.fscl19-1.fna&oh=00_AT9v8lJSmsPnpTTPGaPYuQqDfxyMt4p501I3505qXvKVBA&oe=62FBAD08",
          img2: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298409027_10220435834915807_6705849092329544809_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=IF1C1EPJUMUAX_sHLRq&_nc_ht=scontent.fscl19-1.fna&oh=00_AT8GeSPwRaxGbsQ1dGWcSvJ9ohd5F3FsW2ChP3uBqp1pxw&oe=62FC0EA9",
          img3: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298576615_10220435841715977_126997015276031052_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=CpdIPGP2AY8AX-SnoG9&_nc_ht=scontent.fscl19-1.fna&oh=00_AT-mNxV7qsF4D9_j7HE49xE1hHjasXXBkWW_dBjkUwzh7w&oe=62FBDE33",
        },
        {
          id: 1,
          link: "https://github.com/EvadneO/AUTHENTICATION-JWT",
          name: "AUTHENTICATION-JWT",
          purpose:
            "Realizar un registro de usuario y que pueda iniciar sección.",
          technology:
            "React, Python, Postman, Python, Bootstrap, Flask, HTML, CSS, Javascript, MySQL.",
          img: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298567591_10220428268806659_1413855523887178756_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=eScYb5ScQgoAX-g2S8G&_nc_oc=AQkS1mGNzFAe7w2pe3t79-5Ze_P8yymOIgk854zi9OXBxjQq48PDAJgW2lg7eg1Trm0&_nc_ht=scontent.fscl19-1.fna&oh=00_AT_OG0SFBjl0wjCUKyojC9UQWhTYtZp7nHdjoAlwEk4eEw&oe=62F94A2E",
          img2: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298597028_10220428270326697_1139113630860489167_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=PkVVNzn0qgEAX_8xW6A&_nc_ht=scontent.fscl19-1.fna&oh=00_AT9nLyZXmYiUb_E6uTyhLShLpY3B7xmDRbI0W-QGAMMXXA&oe=62F92687",
          img3: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298341893_10220435746953608_7399839304892392809_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=8YcZg94lX3UAX8l_x9b&_nc_ht=scontent.fscl19-1.fna&oh=00_AT-7aAQlHs4n1kVay54z9vYQEBm3Vr8hByesUPS1QJmVPg&oe=62FA8448",
        },
        {
          id: 3,
          link: "https://github.com/EvadneO/TodoListFetch",
          name: " TodoListFetch",
          purpose: "Realizar una lista de tareas utilizando con Fetch.",
          technology: "Javascript, React y Postman.",
          img: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298528559_10220435744353543_2661207329601509677_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=cC1mNg8BEb4AX_FHuET&_nc_ht=scontent.fscl19-1.fna&oh=00_AT9SgPWJdJmsrHOIMd2oq5eHW5Aoa9e1viH8U31f0no7tQ&oe=62FB89C1",
          img2: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/299225887_10220435744313542_4123268610961939369_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=rs6sh62ynEEAX_HozlY&_nc_ht=scontent.fscl19-1.fna&oh=00_AT_7Q6UwQNpsJkv_Ek2fbFjGNpHBB6EUuWVeWViI8D7kBA&oe=62FA839F",
          img3: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298539440_10220435744393544_3625221350318364316_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=RArYjRaSKygAX_TOK5M&_nc_ht=scontent.fscl19-1.fna&oh=00_AT8d-vlgYD9ZaW4dh5UeHrWyzW661RuyvqsAMd59I2lAkg&oe=62FA5FB6",
        },
        {
          id: 4,
          link: "https://github.com/EvadneO/Proyecto-Final-Toad/tree/Evadne",
          name: " Proyecto-Final-Toad",
          purpose:
            "App para adopción de mascotas abandonados/registro usuario y mascota/login/recuperar password/perfil.",
          technology:
            "React, Javascript, Python, Flask, claudinary, EmailJS, Bootstrap, HTML, CSS, MySQL.",
          img: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298423753_10220435835595824_1236157126610037401_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=3G6C04H3l78AX8N3gjr&_nc_ht=scontent.fscl19-1.fna&oh=00_AT9cPZNQdfkL_EzEf7qvJzvyNErqSe96KjJyOO2oTolifw&oe=62FAD76A",
          img2: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298284172_10220435835635825_3593728214651283883_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=j0pdTXeSAj4AX_xf8Dq&_nc_ht=scontent.fscl19-1.fna&oh=00_AT_f-5dEz2PM1ZVg4uW9ilVXIY-wkJ8DnQRaefIShzPlqg&oe=62FB584E",
          img3: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/299012733_10220435835675826_4409482905503575065_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=hrlkhJZxcS4AX-5nX5a&_nc_ht=scontent.fscl19-1.fna&oh=00_AT_M-yuqjoO_3PCpe8o_nAG82kn4XFTsl8u3gA-sDbQXzA&oe=62FBCE89",
        },
        {
          id: 6,
          link: "https://github.com/EvadneO/Traffic-light",
          name: "Traffic-light",
          purpose: "Crear un semáforo que cambio de colores al presionar. ",
          technology: "React, Javascript, Bootstrap, HTML, CSS.",
          img: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298759564_10220428275966838_5222783022146588720_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=NdipJrP0SPAAX-9EZQa&_nc_ht=scontent.fscl19-1.fna&oh=00_AT945Mj164602zeSSo7FzptoG5PFG63gTekeo92hUBORsg&oe=62F85CCC",
          img2: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298617669_10220428277486876_7771257945569044083_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=xVTFb1Fn5N0AX8QE5KZ&_nc_ht=scontent.fscl19-1.fna&oh=00_AT8o24lHJZHTI2bfd3Ii2C1Sy9_0mUsLotbBP-QM0O5aIg&oe=62F98E69",
          img3: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298555385_10220428278006889_4137526172744182252_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=GQQVrJZoP4oAX9tv7_i&_nc_ht=scontent.fscl19-1.fna&oh=00_AT8TtfFcloRlEB8gvB7f43kqtcx07TY5DdsjjE2C0thTHw&oe=62F8D33E",
        },
        {
          id: 5,
          link: "https://github.com/EvadneO/contador/tree/main/src/js",
          name: "Contador",
          purpose: "Realizar un contador de segundos.",
          technology: "Javascript, HTML, CSS.",
          img: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298073941_10220435743193514_4714346741220430792_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=4V-Bk5YkGIoAX9m_O5s&_nc_ht=scontent.fscl19-1.fna&oh=00_AT9Z205uMuz9qlxTzKCM6h-Ux5em0T1Nc_RJTHLJQdIesw&oe=62FBA744",
          img2: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298190381_10220435743273516_3690495980615574266_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=PVEi-Q_lE4AAX_8O4TW&_nc_ht=scontent.fscl19-1.fna&oh=00_AT-e7iHrMeGJU3GpiL5mscNSKiefbhgeAVudulPtiz_eyA&oe=62FA9DF5",
          img3: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/297854894_10220435743233515_1975391721688947904_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=gycwASZMalUAX87q88t&_nc_ht=scontent.fscl19-1.fna&oh=00_AT8txKHKcF8dOwJZx8wDrPIYhUs3ykyY0BrJ_UkwbeHVNw&oe=62FB391F",
        },
        {
          id: 7,
          link: "https://github.com/EvadneO/Random-Card",
          name: "Random-Card",
          purpose: "Crear un generador de cartas aleatorias.",
          technology: "Javascript, HTML, CSS.",
          img: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/299290881_10220435745033560_6913082032293518450_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=0in9c39ak7cAX9D1geI&_nc_ht=scontent.fscl19-1.fna&oh=00_AT_8OufTgKxIk6mMoZmSzMLWHyQ5h_j3esgvN_SULxPHBQ&oe=62FBD9B2",
          img2: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298510040_10220435745273566_7082800539588910808_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=qmfL_BvJ-o4AX96oE04&_nc_ht=scontent.fscl19-1.fna&oh=00_AT_TDHr9DgWEWX37tUrwAT4FkRB43_N2qsnhuT30pOSaXA&oe=62FC466A",
          img3: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298048044_10220435745153563_6738244303762809234_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=6dfjcza8G4wAX8JXeI6&_nc_ht=scontent.fscl19-1.fna&oh=00_AT_rqK1AkeBOwVYOZ9gu8rog6CDeOUZ-VgJsRtwdZa8Q6A&oe=62FBC02D",
        },
        {
          id: 8,
          link: "https://github.com/EvadneO/Instagram-Bootstrap",
          name: "Instagram-Bootstrap",
          purpose: "Crear un perfil de Instagram con cambio de pantalla.",
          technology: "Bootstrap, HTML, CSS.",
          img: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298695229_10220435747873631_972374037534619608_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=1c9dGG07DEEAX-6EFrp&_nc_ht=scontent.fscl19-1.fna&oh=00_AT-uHkky1KNbqeCLyS_BGDlqcNmHH-Qv2zTewFCOG8rvkw&oe=62FA5C34",
          img2: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/298468570_10220435747753628_3986678246201969633_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=GzeY32ZMGccAX-W970Z&_nc_ht=scontent.fscl19-1.fna&oh=00_AT_CR1K88NP2bAeiQLACWrQgUMVfcja6rh2a5yaeCeQ5KQ&oe=62FA7B82",
          img3: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/299274191_10220435747993634_661041793768021068_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=0ibIHcoX1dEAX_6mW8D&_nc_ht=scontent.fscl19-1.fna&oh=00_AT8iwAAsyjj2sxDauZAPs68IbQ-zxGltNIO4l5sY227DJg&oe=62FBCC96",
        },
      ],

      experience: [
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
      ],
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
