
const colors = [
    "#00A3FF",
    "#FF5C00",
    "#7300B9",
    "#15D904",
    "#FF0606"
]

export default {
    availableColors: colors,
    category: [
        {
            id : "0",
            name: "All",
            color: colors[0],
            icon: "md-globe"
        },
        {
            id : "1",
            name: "General",
            color: colors[0],
            icon: "md-globe"
        },
        {
            id : "2",
            name: "Food",
            color: colors[1],
            icon: "md-pizza"
        },
        {
            id : "3",
            name: "Transport",
            color: colors[2],
            icon: "md-car"
        },
        {
            id : "4",
            name: "Shopping",
            color: colors[3],
            icon: "md-cart"
        },
        {
            id : "5",
            name: "Entertainment",
            color: colors[4],
            icon: "md-game-controller-b"
        }
    ],
    defaultCategory: {
        id : "1",
        name: "General",
        color: colors[0],
        icon: "md-globe"
    },
    defaultColor: colors[0],
    defaultIcon: "md-globe",
    defaultIconColor: "#fff",
    defaultIconSize: 25,
    defaultIconType: "material-community",
}

