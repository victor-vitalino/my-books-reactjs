export default function convertArrayToMatrix(data) {
    let matrix = data.reduce(
        (rows, key, index) =>
            (index % 3 == 0
                ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows,
        []
    );

    return matrix;
}
