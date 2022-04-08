
const colors = [
    "#00A3FF",
    "#FF5C00",
    "#00B9AE",
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
            icon: "ios-globe"
        },
        {
            id : "1",
            name: "General",
            color: colors[0],
            icon: "ios-globe"
        },
        {
            id : "2",
            name: "Food",
            color: colors[4 ],
            icon: "ios-fast-food"
        },
        {
            id : "3",
            name: "School",
            color: colors[2],
            icon: "ios-school"
        },
        {
            id : "4",
            name: "Shopping",
            color: colors[1],
            icon: "ios-cart"
        },
        {
            id : "5",
            name : "Chores",
            color: colors[3],
            icon: "ios-home"
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
    defaultFontFamily : "Amiko-Bold",
    defaultIconType: "material-community",
    ApiUrl: "http://localhost:3000",
    profilePic : "https://avataaars.io/?avatarStyle=Transparent&topType=Hat&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
}

