const searchInput = document.querySelector(".search-input");
    const dropdown = document.querySelector(".dropdown");

    // Example options
    const options = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon"];

    // Show default suggestions when focused
    searchInput.addEventListener("focus", function () {
      showDropdown(options.slice(0, 4)); // show first 4 items by default
    });

    // Filter suggestions when typing
    searchInput.addEventListener("input", function () {
      const value = this.value.toLowerCase();
      if (value) {
        const filtered = options.filter(item => item.toLowerCase().includes(value));
        showDropdown(filtered, value);
      } else {
        showDropdown(options.slice(0, 4)); // reset to default when empty
      }
    });

    // Function to build dropdown
    function showDropdown(items, highlight = "") {
      dropdown.innerHTML = "";
      if (items.length > 0) {
        dropdown.style.display = "block";
        items.forEach(item => {
          const li = document.createElement("li");

          if (highlight) {
            const regex = new RegExp(`(${highlight})`, "gi");
            li.innerHTML = item.replace(regex, "<span class='highlight'>$1</span>");
          } else {
            li.textContent = item;
          }

          li.addEventListener("click", function () {
            searchInput.value = item; // Fill input when clicked
            dropdown.style.display = "none";
          });

          dropdown.appendChild(li);
        });
      } else {
        dropdown.style.display = "none";
      }
    }

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-container")) {
        dropdown.style.display = "none";
      }
    });

//SECOND SEARCH BAR
const searchInput2 = document.querySelector(".search-input2");
    const dropdown2 = document.querySelector(".dropdown2");

    // Example options
    const options2 = ["Coconut", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon"];

    // Show default suggestions when focused
    searchInput2.addEventListener("focus", function () {
      showDropdown(options2.slice(0, 4)); // show first 4 items by default
    });

    // Filter suggestions when typing
    searchInput2.addEventListener("input", function () {
      const value = this.value.toLowerCase();
      if (value) {
        const filtered = options2.filter(item => item.toLowerCase().includes(value));
        showDropdown(filtered, value);
      } else {
        showDropdown(options2.slice(0, 4)); // reset to default when empty
      }
    });

    // Function to build dropdown
    function showDropdown(items, highlight = "") {
      dropdown2.innerHTML = "";
      if (items.length > 0) {
        dropdown2.style.display = "block";
        items.forEach(item => {
          const li = document.createElement("li");

          if (highlight) {
            const regex = new RegExp(`(${highlight})`, "gi");
            li.innerHTML = item.replace(regex, "<span class='highlight'>$1</span>");
          } else {
            li.textContent = item;
          }

          li.addEventListener("click", function () {
            searchInput2.value = item; // Fill input when clicked
            dropdown2.style.display = "none";
          });

          dropdown2.appendChild(li);
        });
      } else {
        dropdown2.style.display = "none";
      }
    }

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-container2")) {
        dropdown2.style.display = "none";
      }
    });

const searchInput3 = document.querySelector(".search-input3");
    const dropdown3 = document.querySelector(".dropdown3");

    // Example options
    const options3 = ["Coconut", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon"];

    // Show default suggestions when focused
    searchInput3.addEventListener("focus", function () {
      showDropdown(options3.slice(0, 4)); // show first 4 items by default
    });

    // Filter suggestions when typing
    searchInput3.addEventListener("input", function () {
      const value = this.value.toLowerCase();
      if (value) {
        const filtered = options3.filter(item => item.toLowerCase().includes(value));
        showDropdown(filtered, value);
      } else {
        showDropdown(options3.slice(0, 4)); // reset to default when empty
      }
    });

    // Function to build dropdown
    function showDropdown(items, highlight = "") {
      dropdown3.innerHTML = "";
      if (items.length > 0) {
        dropdown3.style.display = "block";
        items.forEach(item => {
          const li = document.createElement("li");

          if (highlight) {
            const regex = new RegExp(`(${highlight})`, "gi");
            li.innerHTML = item.replace(regex, "<span class='highlight'>$1</span>");
          } else {
            li.textContent = item;
          }

          li.addEventListener("click", function () {
            searchInput3.value = item; // Fill input when clicked
            dropdown3.style.display = "none";
          });

          dropdown3.appendChild(li);
        });
      } else {
        dropdown3.style.display = "none";
      }
    }

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-container3")) {
        dropdown3.style.display = "none";
      }
    });

