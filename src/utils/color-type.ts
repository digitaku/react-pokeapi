

function getColorType(type: string): string {
    let color = "";
    switch (type) {
        case "electric":
            color = "#F8D030";
            break;
        case "fire":
            color = "#F08030";
            break;
        case "water":
            color = "#6890F0";
            break;
        case "steel":
            color = "#B8B8D0";
            break;
        case "grass":
            color = "#78C850";
            break;
        case "psychic":
            color = "#F85888";
            break;
        case "ice":
            color = "#98D8D8";
            break;
        case "dragon":
            color = "#7038F8";
            break;
        case "dark":
            color = "#705848";
            break;
        case "fairy":
            color = "#EE99AC";
            break;
        case "ghost":
            color = "#705898";
            break;
        case "bug":
            color = "#A8B820";
            break;
        case "rock":
            color = "#B8A038";
            break;
        case "ground":
            color = "#E0C068";
            break;
        case "poison":
            color = "#A040A0";
            break;
        case "flying":
            color = "#A890F0";
            break;
        case "fight":
            color = "#C03028";
            break;
        default:
            color = "#A8A878";
    }
    return color;
}

export default getColorType;