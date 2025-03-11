// Assuming you have a list of properties with agent info
const properties = [
    {
        id: 1,
        name: "Beautiful Family Home",
        location: "5232 California Fake, Ave. 21BC, California, USA",
        beds: 3,
        baths: 2,
        description: "This beautiful home features a spacious open-plan living area, a gourmet kitchen, and luxurious finishes throughout. The garden offers a relaxing retreat, perfect for entertaining guests or enjoying a peaceful moment outdoors.",
        images: [
            "images/houses/house1.jpg", "images/bedrooms/house1-bedroom1.jpg",  "images/bedrooms/house1-bedroom2.jpg","images/bathrooms/house1-bathroom1.jpg", 
            "images/bathrooms/house1-bathroom2.jpg","images/livingrooms/house1-livingroom1.jpg"
        ],
        agent: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 (123) 456-7890",
            image: "images/agents/agent1.jpg"
        }
    },
    {
        id: 2,
        name: "Modern Downtown Condo",
        location: "1245 Urban St., Downtown, California, USA",
        beds: 2,
        baths: 2,
        description: "A sleek modern condo with amazing views of the city skyline, complete with high-end appliances and a spacious balcony.",
        images: [
            "images/houses/house2.jpg", "images/bedrooms/house2-bedroom1.jpg","images/bedrooms/house2-bedroom2.jpg", "images/bathrooms/house2-bathroom1.jpg", 
            "images/bathrooms/house2-bathroom2.jpg","images/livingrooms/house2-livingroom2.jpg"
        ],
        agent: {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "+1 (234) 567-8901",
            image: "images/agents/agent2.jpg"
        }
    },
    {
        id: 3,
        name: "Luxury Penthouse in the City",
        location: "9021 Sunset Blvd., Penthouse 5, Los Angeles, CA, USA",
        beds: 4,
        baths: 3,
        description: "An ultra-modern penthouse with floor-to-ceiling windows offering breathtaking city views. The penthouse features top-of-the-line finishes and expansive living spaces.",
        images: [
            "images/houses/house3.jpg", "images/bedrooms/house3-bedroom1.jpg", "images/bedrooms/house3-bedroom2.jpg", "images/bedrooms/house3-bedroom3.jpg", 
            "images/bedrooms/house3-bedroom4.jpg", "images/bathrooms/house2-bathroom1.jpg", "images/bathrooms/house1-bathroom2.jpg",
			"images/livingrooms/house1-livingroom2.jpg"
        ],
        agent: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 (123) 456-7890",
            image: "images/agents/agent1.jpg"
        }
    },
    {
        id: 4,
        name: "Cozy Beach Cottage",
        location: "2587 Ocean Breeze Rd., Malibu, California, USA",
        beds: 2,
        baths: 1,
        description: "A charming beach cottage just steps away from the ocean. Enjoy the peaceful ambiance and stunning views from this adorable getaway.",
        images: [
            "images/houses/house4.jpg", "images/bedrooms/house1-bedroom1.jpg", "images/bedrooms/house2-bedroom2.jpg", "images/bedrooms/house3-bedroom3.jpg", 
            "images/bathrooms/house1-bathroom1.jpg", "images/bathrooms/house2-bathroom1.jpg",
			"images/livingrooms/house1-livingroom1.jpg"
        ],
        agent: {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "+1 (234) 567-8901",
            image: "images/agents/agent2.jpg"
        }
    },
    {
        id: 5,
        name: "Urban Loft with Amazing Views",
        location: "3476 Maple St., Apt. 6, San Francisco, CA, USA",
        beds: 1,
        baths: 1,
        description: "A stylish urban loft in the heart of San Francisco with panoramic views of the Golden Gate Bridge and surrounding areas.",
        images: [
            "images/houses/house5.jpg", "images/bedrooms/house1-bedroom1.jpg", "images/bedrooms/house3-bedroom1.jpg",
			"images/bathrooms/house2-bathroom1.jpg", 
            "images/livingrooms/house2-livingroom2.jpg"
        ],
        agent: {
            name: "Michael Johnson",
            email: "michael.johnson@example.com",
            phone: "+1 (345) 678-9012",
            image: "images/agents/agent3.jpg"
        }
    },
    {
        id: 6,
        name: "Spacious Suburban Home",
        location: "8653 Park View Ln., San Diego, California, USA",
        beds: 3,
        baths: 2,
        description: "A spacious suburban home with a large backyard, ideal for families. The home features an open floor plan, modern kitchen, and cozy living spaces.",
        images: [
            "images/houses/house6.jpg", "images/bedrooms/house3-bedroom1.jpg", "images/bedrooms/house3-bedroom2.jpg", "images/bedrooms/house2-bedroom3.jpg", 
            "images/bedrooms/house3-bedroom4.jpg", "images/bedrooms/house3-bedroom4.jpg","images/bathrooms/house2-bathroom1.jpg", "images/bathrooms/house1-bathroom2.jpg",
			"images/livingrooms/house1-livingroom2.jpg"
        ],
        agent: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 (123) 456-7890",
            image: "images/agents/agent1.jpg"
        }
    },
    {
        id: 7,
        name: "Rustic Mountain Retreat",
        location: "4920 Pinehill Rd., Lake Tahoe, California, USA",
        beds: 4,
        baths: 3,
        description: "This rustic mountain home is perfect for those who love nature. With stunning views, a large stone fireplace, and cozy rooms, this is a peaceful retreat.",
        images: [
            "images/houses/house7.jpg", "images/bedrooms/house1-bedroom1.jpg",  "images/bedrooms/house1-bedroom2.jpg","images/bathrooms/house1-bathroom1.jpg", 
            "images/bathrooms/house1-bathroom2.jpg","images/livingrooms/house1-livingroom1.jpg"
        ],
        agent: {
            name: "Michael Johnson",
            email: "michael.johnson@example.com",
            phone: "+1 (345) 678-9012",
            image: "images/agents/agent3.jpg"
        }
    },
    {
        id: 8,
        name: "Downtown Loft with City Views",
        location: "1213 Broadway Ave., Loft 4B, New York City, NY, USA",
        beds: 2,
        baths: 2,
        description: "This downtown loft offers expansive views of the New York City skyline. With modern finishes and an industrial aesthetic, it's perfect for city living.",
        images: [
            "images/houses/house8.jpg", "images/bedrooms/house1-bedroom1.jpg", "images/bedrooms/house3-bedroom1.jpg",
			"images/bathrooms/house2-bathroom1.jpg", "images/bathrooms/house1-bathroom2.jpg",
            "images/livingrooms/house2-livingroom2.jpg"
        ],
        agent: {
            name: "Sarah Williams",
            email: "sarah.williams@example.com",
            phone: "+1 (456) 789-0123",
            image: "images/agents/agent4.jpg"
        }
    },
    {
        id: 9,
        name: "Country Side Farmhouse",
        location: "1708 Meadow Ln., Napa Valley, California, USA",
        beds: 5,
        baths: 4,
        description: "A beautiful farmhouse located in the heart of Napa Valley, offering large living spaces, a sprawling yard, and stunning countryside views.",
        images: [
            "images/houses/house9.jpg", "images/bedrooms/house3-bedroom1.jpg", "images/bedrooms/house3-bedroom2.jpg", "images/bedrooms/house2-bedroom3.jpg", 
            "images/bedrooms/house3-bedroom4.jpg", "images/bedrooms/house2-bedroom1.jpg","images/bedrooms/house3-bedroom4.jpg",
			"images/bathrooms/house2-bathroom1.jpg", "images/bathrooms/house1-bathroom2.jpg","images/bathrooms/house1-bathroom1.jpg", "images/bathrooms/house2-bathroom2.jpg",
			"images/livingrooms/house1-livingroom1.jpg"
        ],
        agent: {
            name: "Sarah Williams",
            email: "sarah.williams@example.com",
            phone: "+1 (456) 789-0123",
            image: "images/agents/agent4.jpg"
        }
    },
    {
        id: 10,
        name: "Coastal Luxury Estate",
        location: "1402 Coastal Rd., Malibu, California, USA",
        beds: 3,
        baths: 2,
        description: "A luxurious estate with expansive ocean views, state-of-the-art amenities, and elegant finishes throughout the property.",
        images: [
            "images/houses/house6.jpg", "images/bedrooms/house3-bedroom1.jpg", "images/bedrooms/house3-bedroom2.jpg", "images/bedrooms/house2-bedroom3.jpg", 
            "images/bedrooms/house3-bedroom4.jpg", "images/bedrooms/house3-bedroom4.jpg","images/bathrooms/house2-bathroom1.jpg", "images/bathrooms/house1-bathroom2.jpg",
			"images/livingrooms/house1-livingroom2.jpg"
        ],
        agent: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 (123) 456-7890",
            image: "images/agents/agent1.jpg"
        }
    }
];

// Function to load property details based on URL
function loadPropertyDetails() {
    const params = new URLSearchParams(window.location.search);
    const propertyId = parseInt(params.get('property'), 10); // Get the property ID from the URL

    // Find the property by ID
    const property = properties.find(p => p.id === propertyId);

    if (property) {
        // Load property details into the page
        document.getElementById("property-name").textContent = property.name;
        document.getElementById("property-location").textContent = property.location;
        document.getElementById("property-beds").textContent = property.beds;
        document.getElementById("property-baths").textContent = property.baths;

        // Load property images
        const imageContainer = document.getElementById("property-images");
        property.images.forEach(image => {
            const img = document.createElement("img");
            img.src = image;
            img.alt = property.name;
            imageContainer.appendChild(img);
        });

        // Load property description
        document.getElementById("property-description-text").textContent = property.description;

        // Load agent details
        document.getElementById("agent-image").src = property.agent.image;
        document.getElementById("agent-name").textContent = property.agent.name;
        document.getElementById("agent-email").textContent = property.agent.email;
        document.getElementById("agent-phone").textContent = property.agent.phone;
    } else {
        console.error("Property not found");
    }
}

// Run the function to load the details when the page loads
window.onload = loadPropertyDetails;
