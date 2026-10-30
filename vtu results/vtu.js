const resultLinks = {


// =========================================
    // 2025 SCHEME - 2025-29 BATCH
    // =========================================

    "2025|2025-29|1":
        "https://results.vtu.ac.in/D25J26Ecbcs/resultpage.php?scheme=2025&batch=2025-29&sem=1",

    "2025|2025-29|2":
        "https://results.vtu.ac.in/MJ26cbcs/resultpage.php?scheme=2025&batch=2025-29&sem=2",

    "2025|2025-29|3":
        "PASTE_2025_2025-29_5TH_SEM_LINK_HERE",

    "2025|2025-29|4":
        "PASTE_2025_2025-29_5TH_SEM_LINK_HERE",

    "2025|2025-29|5":
        "PASTE_2025_2025-29_5TH_SEM_LINK_HERE",

    "2025|2025-29|6":
        "PASTE_2025_2025-29_6TH_SEM_LINK_HERE",

    "2025|2025-29|7":
        "PASTE_2025_2025-29_7TH_SEM_LINK_HERE",

    "2025|2025-29|8":
        "PASTE_2025_2025-29_8TH_SEM_LINK_HERE",



    // =========================================
    // 2022 SCHEME - 2024-28 BATCH
    // =========================================

    "2022|2024-28|1":
        "https://results.vtu.ac.in/DJcbcs25/resultpage.php?scheme=2022&batch=2024-28&sem=1",

    "2022|2024-28|2":
        "https://results.vtu.ac.in/JJEcbcs25/resultpage.php?scheme=2022&batch=2024-28&sem=2",

    "2022|2024-28|3":
        "https://results.vtu.ac.in/D25J26Ecbcs/resultpage.php?scheme=2022&batch=2024-28&sem=3",

    "2022|2024-28|4":
        "https://results.vtu.ac.in/MJ26cbcs/resultpage.php?scheme=2022&batch=2024-28&sem=4",

    "2022|2024-28|5":
        "PASTE_2022_2024-28_5TH_SEM_LINK_HERE",

    "2022|2024-28|6":
        "PASTE_2022_2024-28_6TH_SEM_LINK_HERE",

    "2022|2024-28|7":
        "PASTE_2022_2024-28_7TH_SEM_LINK_HERE",

    "2022|2024-28|8":
        "PASTE_2022_2024-28_8TH_SEM_LINK_HERE",



    // =========================================
    // 2022 SCHEME - 2023-27 BATCH
    // =========================================

    "2022|2023-27|1":
        "https://results.vtu.ac.in/DJcbcs24/resultpage.php?scheme=2022&batch=2023-27&sem=1",

    "2022|2023-27|2":
        "https://results.vtu.ac.in/JJEcbcs24/resultpage.php?scheme=2022&batch=2023-27&sem=2",

    "2022|2023-27|3":
        "https://results.vtu.ac.in/DJcbcs25/resultpage.php?scheme=2022&batch=2023-27&sem=3",

    "2022|2023-27|4":
        "https://results.vtu.ac.in/JJEcbcs25/resultpage.php?scheme=2022&batch=2023-27&sem=4",

    "2022|2023-27|5":
        "https://results.vtu.ac.in/D25J26Ecbcs/resultpage.php?scheme=2022&batch=2023-27&sem=5",

    "2022|2023-27|6":
        "https://results.vtu.ac.in/MJ26cbcs/resultpage.php?scheme=2022&batch=2023-27&sem=6",

    "2022|2023-27|7":
        "PASTE_LINK_HERE",

    "2022|2023-27|8":
        "PASTE_LINK_HERE",



    // =========================================
    // 2022 SCHEME - 2022-26 BATCH
    // =========================================

    "2022|2022-26|1":
        "PASTE_LINK_HERE",

    "2022|2022-26|2":
        "PASTE_LINK_HERE",

    "2022|2022-26|3":
        "https://results.vtu.ac.in/DJcbcs24/resultpage.php?scheme=2022&batch=2022-26&sem=3",

    "2022|2022-26|4":
        "https://results.vtu.ac.in/JJEcbcs24/resultpage.php?scheme=2022&batch=2022-26&sem=4",

    "2022|2022-26|5":
        "https://results.vtu.ac.in/DJcbcs25/resultpage.php?scheme=2022&batch=2022-26&sem=5",

    "2022|2022-26|6":
        "https://results.vtu.ac.in/JJEcbcs25/resultpage.php?scheme=2022&batch=2022-26&sem=6",

    "2022|2022-26|7":
        "https://results.vtu.ac.in/D25J26Ecbcs/resultpage.php?scheme=2022&batch=2022-26&sem=7",

    "2022|2022-26|8":
        "https://results.vtu.ac.in/MJ26cbcs/resultpage.php?scheme=2022&batch=2022-26&sem=8",



    // // =========================================
    // // 2021 SCHEME
    // // =========================================

    // "2021|2021-25|1":
    //     "PASTE_LINK_HERE",

    // "2021|2021-25|2":
    //     "PASTE_LINK_HERE",

    // "2021|2021-25|3":
    //     "PASTE_LINK_HERE",

    // "2021|2021-25|4":
    //     "PASTE_LINK_HERE",

    // "2021|2021-25|5":
    //     "PASTE_LINK_HERE",

    // "2021|2021-25|6":
    //     "PASTE_LINK_HERE",

    // "2021|2021-25|7":
    //     "PASTE_LINK_HERE",

    // "2021|2021-25|8":
    //     "PASTE_LINK_HERE"

};






document
    .getElementById("checkResult")
    .addEventListener("click", function () {

        const scheme =
            document.getElementById("scheme").value;

        const batch =
            document.getElementById("batch").value;

        const semester =
            document.getElementById("semester").value;


        // Check whether everything is selected

        if (!scheme || !batch || !semester) {

            alert(
                "Please select Scheme, Batch and Semester."
            );

            return;
        }


        // Create unique key

        const key =
            `${scheme}|${batch}|${semester}`;


        // Find result link

        const resultURL =
            resultLinks[key];


        // If link exists

        if (
            resultURL &&
            !resultURL.includes("PASTE_")
        ) {

            window.open(
                resultURL,
                "_blank"
            );

        }

        else {

            alert(
                "Result link is not available yet."
            );

        }

    });
    const scheme = document.getElementById("scheme");
const batch = document.getElementById("batch");
const semester = document.getElementById("semester");
const checkResult = document.getElementById("checkResult");


// Batches available for each scheme

const batches = {

    "2025": [
        {
            value: "2025-29",
            text: "2025–29 Batch"
        }
    ],

    "2022": [
        {
            value: "2024-28",
            text: "2024–28 Batch"
        },
        {
            value: "2023-27",
            text: "2023–27 Batch"
        },
        {
            value: "2022-26",
            text: "2022–26 Batch"
        }
    ],

    "2021": [
        {
            value: "2021-25",
            text: "2021–25 Batch"
        }
    ],

    "2018": [
        {
            value: "2018-22",
            text: "2018–22 Batch"
        }
    ],

    "2017": [
        {
            value: "2017-21",
            text: "2017–21 Batch"
        }
    ],

    "2015": [
        {
            value: "2015-19",
            text: "2015–19 Batch"
        }
    ]

};


// When scheme changes

scheme.addEventListener("change", function () {

    const selectedScheme = scheme.value;

    // Clear old batches

    batch.innerHTML = `
        <option value="">
            Select Batch
        </option>
    `;


    // Get batches for selected scheme

    if (batches[selectedScheme]) {

        batches[selectedScheme].forEach(function (item) {

            const option = document.createElement("option");

            option.value = item.value;

            option.textContent = item.text;

            batch.appendChild(option);

        });

    }

});