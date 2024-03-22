
// Decoration Dynadimacally add item

function addDecorationItem() {
    let arr = [
        { quote_1: "Best design for royal house", quote_2: "Lorem ipsum dolor sit amet", image: "https://imgs.search.brave.com/odcyT1oOKa-bgfZoT4UPerLbOvinA0YhCYWOKFy8iBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA2L1N0YWlyY2Fz/ZS1GbG9yYWwtRGVj/b3JhdGlvbi5qcGc" },

        { quote_1: "Best design for royal house", quote_2: "Lorem ipsum dolor sit amet", image: "https://imgs.search.brave.com/CLtcmsSh59Jps61VoNhTYJ9G73XAVr-okpTRGX3Qrfc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA2L0JhYnktU2hv/d2VyLUZsb3JhbC1E/ZWNvcmF0aW9ucy5q/cGc" },

        { quote_1: "Best design for royal house", quote_2: "Lorem ipsum dolor sit amet", image: "https://imgs.search.brave.com/wgLcfgT3HnO90dHdT3xWKQsMJwqwjPP2gv9HmgEOKa8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA2L0Zsb3dlci1G/cmFtZS1EZWNvcmF0/aW9uLWZvci1Ib21l/LmpwZw" },


        { quote_1: "Best design for royal house", quote_2: "Lorem ipsum dolor sit amet", image: "https://imgs.search.brave.com/wv7cve7qwRqYcnYeVwGER6h0rUdDGhCw2rBiJHYoiyI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA2L0NyYWRsZS1G/bG93ZXItRGVjb3Jh/dGlvbi5qcGc" },

        { quote_1: "Best design for royal house", quote_2: "Lorem ipsum dolor sit amet", image: "https://imgs.search.brave.com/tq1GKmfRbkLmngsCi0DrmL3N5fd-79_lr9NcFJ-53gY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA2L0hhbGRpLUZs/b3JhbC1EZWNvcmF0/aW9ucy5qcGnc" },

        { quote_1: "Best design for royal house", quote_2: "Lorem ipsum dolor sit amet", image: "https://imgs.search.brave.com/tq1GKmfRbkLmngsCi0DrmL3N5fd-79_lr9NcFJ-53gY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA2L0hhbGRpLUZs/b3JhbC1EZWNvcmF0/aW9ucy5qcGc" }
    ]

    let clutter = '';
    arr.forEach(function (item) {

        clutter += `  <div class="box-item">
      <img src="${item.image}"
          alt="">
      <div class="desc">
          <h3>${item.quote_1}</h3>
          <p>${item.quote_2}.</p>
      </div>
  
  </div>`
    })

    document.querySelector('.right-items .item-container').innerHTML = clutter;

    // These is for adding client reviews
    let reviews = [
        { client: "ABC", review: "These is very good" },
        { client: "BCD", review: "These is very good 1" }
        // { client: "DEF", review: "These is very good 2" }
    ]

    let clutter_review = '';
    reviews.forEach((item) => {


        clutter_review += ` <div class="review-box">
        <h3>Customer Reviews</h3>

        <p><i class="ri-double-quotes-l"></i> ${item.review} <i class="ri-double-quotes-r"></i> </p>
        <p> -- ${item.client}</p>
        </div>`
    })

    document.querySelector('.left-contact').innerHTML = clutter_review;
}

addDecorationItem()