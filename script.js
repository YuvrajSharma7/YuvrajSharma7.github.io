// ==================== BOOKS DATA ====================
const booksData = [
    {
        id: 1,
        title: "Spring in Action",
        author: "Craig Walls",
        category: "Backend",
        description: "Essential guide to building enterprise applications with Spring Boot and Spring Framework.",
        keyTopics: ["Spring Boot", "Spring MVC", "Spring Data", "Dependency Injection"],
        rating: 5,
        year: 2022
    },
    {
        id: 2,
        title: "Microservices Patterns",
        author: "Chris Richardson",
        category: "Architecture",
        description: "Comprehensive patterns for building distributed microservices architecture.",
        keyTopics: ["Microservices", "Patterns", "API Gateway", "Service Discovery"],
        rating: 5,
        year: 2018
    },
    {
        id: 3,
        title: "Docker Deep Dive",
        author: "Nigel Poulton",
        category: "DevOps",
        description: "Complete guide to containerization and Docker ecosystem for modern development.",
        keyTopics: ["Docker", "Containers", "Images", "Networking"],
        rating: 5,
        year: 2020
    },
    {
        id: 4,
        title: "Kubernetes in Action",
        author: "Marko Lukša",
        category: "DevOps",
        description: "Practical guide to orchestrating containers at scale with Kubernetes.",
        keyTopics: ["Kubernetes", "Orchestration", "Pods", "Services"],
        rating: 5,
        year: 2017
    },
    {
        id: 5,
        title: "Learning React",
        author: "Alex Banks & Eve Porcello",
        category: "Frontend",
        description: "Modern approach to building user interfaces with React and JavaScript.",
        keyTopics: ["React", "Hooks", "State Management", "Components"],
        rating: 5,
        year: 2020
    },
    {
        id: 6,
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        category: "Distributed Systems",
        description: "Deep dive into distributed systems, databases, and system design fundamentals.",
        keyTopics: ["Databases", "Distributed Systems", "Replication", "Consensus"],
        rating: 5,
        year: 2017
    },
    {
        id: 7,
        title: "OAuth 2.0 in Action",
        author: "Justin Richer & Antonio Sanso",
        category: "Backend",
        description: "Complete guide to implementing modern authentication and authorization patterns.",
        keyTopics: ["OAuth 2.0", "Security", "Authentication", "Authorization"],
        rating: 4,
        year: 2017
    },
    {
        id: 8,
        title: "AWS Certified Solutions Architect Associate Study Guide",
        author: "Neal Davis & Jon Bonso",
        category: "DevOps",
        description: "Comprehensive study material for AWS Solutions Architect certification.",
        keyTopics: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"],
        rating: 5,
        year: 2022
    },
    {
        id: 9,
        title: "Test Driven Development",
        author: "Kent Beck",
        category: "Backend",
        description: "Foundational practices for writing maintainable code through effective testing.",
        keyTopics: ["TDD", "Unit Testing", "Integration Testing", "Code Quality"],
        rating: 5,
        year: 2002
    },
    {
        id: 10,
        title: "System Design Interview",
        author: "Alex Xu",
        category: "System Design",
        description: "Practical guide to designing scalable systems and solving complex architecture problems.",
        keyTopics: ["System Design", "Scalability", "Load Balancing", "Caching"],
        rating: 5,
        year: 2020
    },
    {
        id: 11,
        title: "The Data Warehouse Toolkit",
        author: "Ralph Kimball",
        category: "Distributed Systems",
        description: "Essential patterns for building data warehouses and analytics solutions.",
        keyTopics: ["Data Warehousing", "OLAP", "Dimensional Modeling", "ETL"],
        rating: 5,
        year: 2013
    },
    {
        id: 12,
        title: "Cracking the Coding Interview",
        author: "Gayle Laakmann McDowell",
        category: "Interview Prep",
        description: "Problem-solving strategies and coding interview preparation guide.",
        keyTopics: ["Algorithms", "Data Structures", "Interview Prep", "Problem Solving"],
        rating: 5,
        year: 2015
    },
    {
        id: 13,
        title: "Building Microservices",
        author: "Sam Newman",
        category: "Architecture",
        description: "Design, develop, and deploy microservices-based systems with design patterns.",
        keyTopics: ["Microservices", "Service Design", "Deployment", "Monitoring"],
        rating: 5,
        year: 2015
    },
    {
        id: 14,
        title: "The Phoenix Project",
        author: "Gene Kim, Kevin Behr & George Spafford",
        category: "DevOps",
        description: "A novel about IT operations and DevOps practices, teaching lean principles.",
        keyTopics: ["DevOps", "Lean", "Continuous Delivery", "Culture"],
        rating: 5,
        year: 2013
    },
    {
        id: 15,
        title: "Enterprise Integration Patterns",
        author: "Gregor Hohpe & Bobby Woolf",
        category: "Architecture",
        description: "Designing reliable asynchronous messaging systems and integration solutions.",
        keyTopics: ["Integration", "Messaging", "Patterns", "EIP"],
        rating: 5,
        year: 2003
    },
    {
        id: 16,
        title: "The Art of Computer Programming",
        author: "Donald E. Knuth",
        category: "System Design",
        description: "Fundamental algorithms and data structures concepts for software development.",
        keyTopics: ["Algorithms", "Data Structures", "Analysis", "Complexity"],
        rating: 5,
        year: 1968
    }
];

// ==================== UDEMY COURSES DATA ====================
const udemyCoursesData = [
    {
        id: 1,
        title: "Spring Boot Microservices with Docker and Kubernetes",
        status: "Completed",
        description: "Master building scalable microservices with Spring Boot, Docker containerization, and Kubernetes orchestration.",
        tags: ["Spring Boot", "Microservices", "Docker", "Kubernetes"],
        dateCompleted: "2024-11-01"
    },
    {
        id: 2,
        title: "Complete Kubernetes Bootcamp",
        status: "Completed",
        description: "Comprehensive guide to Kubernetes container orchestration, deployment strategies, and production-ready configurations.",
        tags: ["Kubernetes", "Docker", "DevOps", "Cloud"],
        dateCompleted: "2024-10-15"
    },
    {
        id: 3,
        title: "AWS Solutions Architect Associate Certification",
        status: "Completed",
        description: "In-depth AWS course covering EC2, S3, RDS, Lambda, and other essential AWS services for architecture design.",
        tags: ["AWS", "Cloud Architecture", "Certification"],
        dateCompleted: "2024-09-20"
    },
    {
        id: 4,
        title: "React - The Complete Guide",
        status: "Completed",
        description: "Master React.js with hooks, context API, routing, and state management for building modern web applications.",
        tags: ["React", "JavaScript", "Frontend"],
        dateCompleted: "2024-08-30"
    },
    {
        id: 5,
        title: "Java Programming for Beginners to Advanced",
        status: "Completed",
        description: "Comprehensive Java course covering OOP, collections, multithreading, and advanced design patterns.",
        tags: ["Java", "OOP", "Programming"],
        dateCompleted: "2024-08-10"
    },
    {
        id: 6,
        title: "System Design Interview - Complete Course",
        status: "Completed",
        description: "Learn to design large-scale distributed systems, databases, and solve real-world architecture problems.",
        tags: ["System Design", "Interview Prep", "Architecture"],
        dateCompleted: "2024-07-25"
    },
    {
        id: 7,
        title: "Java Certificat Prep: OCA (1Z0-808) & OCP (1Z0-829, 1Z0-830)",
        status: "Completed",
        description: "Everything you need to know to pass Oracle exams (808, 829, 830) and become fully certified Java Programmer/Developer.",
        tags: ["Java", "Certification", "Programming"],
        dateCompleted: "2024-07-10"
    },
    {
        id: 8,
        title: "Data Structures & Algorithms in Java + 150 Leetcode Problems",
        status: "Completed",
        description: "Comprehensive course covering essential data structures and algorithms in Java, with 150 practice problems from Leetcode.",
        tags: ["Java", "Algorithms", "Data Structures"],
        dateCompleted: "2024-06-20"
    },
    {
        id: 9,
        title: "GitHub Copilot Beginner to Pro - AI for Coding & Development",
        status: "Completed",
        description: "Learn to use GitHub Copilot effectively for coding and development tasks.",
        tags: ["GitHub", "Copilot", "AI"],
        dateCompleted: "2024-06-05"
    },
    {
        id: 10,
        title: "100 Days of Code™: The Complete Python Pro Bootcamp",
        status: "Completed",
        description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
        tags: ["Python", "Data Science", "Automation"],
        dateCompleted: "2024-05-15"
    },
    {
        id: 11,
        title: "GitOps with Kubernetes (K8S), Terraform, Azure and AWS",
        status: "Completed",
        description: "Implement GitOps principles (pull based) with Azure Cloud (AKS), AWS and create project infrastructure using Terraform",
        tags: ["GitOps", "Kubernetes", "Terraform"],
        dateCompleted: "2026-01-10"
    },
    {
        id: 12,
        title: "Go: The Complete Developer's Guide (Golang)",
        status: "In Progress",
        description: "Master the fundamentals and advanced features of the Go Programming Language (Golang)",
        tags: ["Go", "Programming", "Backend"],
        dateCompleted: null
    },
    {
        id: 13,
        title: "Master Microservices with Spring Boot and Spring Cloud",
        status: "Completed",
        description: "Java Spring Boot Microservices 5-in-1 - Spring Boot, Spring Cloud, Docker, Kubernetes and REST API (REST Web Services)",
        tags: ["Java", "Spring Boot", "Microservices"],
        dateCompleted: "2024-04-10"
    },
    {
        id: 14,
        title: "The Complete Guide to Becoming a Software Architect",
        status: "Completed",
        description: "The most comprehensive guide that will make you a Software Architect, the most desired role in the software industry.",
        tags: ["Software Architecture", "System Design", "Career Growth"],
        dateCompleted: "2025-09-15"
    },
    {
        id: 15,
        title: "Apache Kafka Series - Learn Apache Kafka for Beginners v3",
        status: "Completed",
        description: "START HERE: Learn Apache Kafka 4.0 Ecosystem, Core Concepts, Real World Java Producers/Consumers & Big Data Architecture",
        tags: ["Kafka", "Streaming", "Big Data"],
        dateCompleted: "2025-02-10"
    },
    {
        id: 16,
        title: "The OWASP Top 10 2025 - Deep Dive",
        status: "Completed",
        description: "Learn about the top 10 web application security risks and how to mitigate them.",
        tags: ["OWASP", "Security", "Web Applications"],
        dateCompleted: "2026-02-17"
    },
    {
        id: 17,
        title: "PS|Generative AI Ethics and Responsible Use",
        status: "Completed",
        description: "Understand the ethical implications of generative AI and learn how to use it responsibly in various applications.",
        tags: ["Generative AI", "Ethics", "Responsible Use"],
        dateCompleted: "2025-07-11"
    },
    {
        id: 18,
        title: "PS|Prompt Engineering for Engineers",
        status: "Completed",
        description: "Learn how to effectively prompt generative AI models for better results in various engineering tasks.",
        tags: ["Generative AI", "Prompt Engineering", "Engineering"],
        dateCompleted: "2025-06-09"
    },
    {
        id: 19,
        title: "PS|Slingshot: AI Coding Assistant",
        status: "Completed",
        description: "Learn how to use Slingshot, an AI coding assistant, to enhance your coding productivity and efficiency.",
        tags: ["Generative AI", "Prompt Engineering", "Coding Assistant"],
        dateCompleted: "2025-04-19"
    }
];

// ==================== CERTIFICATES DATA ====================
const certificatesData = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        credentialId: "AWS-SAA-2024",
        issuedDate: "2024-08-15",
        expiryDate: "2027-08-15",
        status: "Active",
        skills: ["AWS", "Cloud Architecture", "EC2", "S3", "RDS", "Lambda"],
        description: "Demonstrates expertise in designing distributed applications and systems on AWS platforms.",
        link: "https://www.credly.com/badges/aws-saa"
    },
    {
        id: 2,
        title: "Docker Certified Associate",
        issuer: "Docker Inc.",
        credentialId: "DCA-2024-1908",
        issuedDate: "2024-03-10",
        expiryDate: "2026-03-10",
        status: "Active",
        skills: ["Docker", "Containerization", "DevOps", "Container Security"],
        description: "Validates skills in designing, building, and operating Docker containers and applications.",
        link: "https://www.credly.com/badges/docker-ca"
    },
    {
        id: 3,
        title: "Secure Coding with Java",
        issuer: "Oracle University",
        credentialId: "SCJ-2023-5678",
        issuedDate: "2023-07-05",
        expiryDate: "2025-07-05",
        status: "Active",
        skills: ["Java Security", "Secure Coding", "Best Practices", "Code Quality"],
        description: "Demonstrates knowledge of secure coding practices in Java applications.",
        link: "https://education.oracle.com"
    },
    {
        id: 4,
        title: "Data Engineering Essentials",
        issuer: "Cloudera",
        credentialId: "DEE-2023-3456",
        issuedDate: "2023-05-18",
        expiryDate: "2025-05-18",
        status: "Active",
        skills: ["Data Engineering", "ETL", "Big Data", "Hadoop", "Spark"],
        description: "Validates skills in data engineering, processing, and managing big data systems.",
        link: "https://www.cloudera.com/about/training/certification.html"
    },
    {
        id: 5,
        title: "React.js Advanced Certificate",
        issuer: "Scrimba",
        credentialId: "RAC-2023-1234",
        issuedDate: "2023-02-14",
        expiryDate: null,
        status: "Lifetime",
        skills: ["React", "Frontend Development", "JavaScript", "Component Design"],
        description: "Advanced certification in React.js covering hooks, state management, and best practices.",
        link: "https://scrimba.com"
    },
    {
        id: 6,
        title: "Apache Kafka Developer Certification",
        issuer: "Confluent",
        credentialId: "KAFKA-DEV-2023",
        issuedDate: "2023-12-10",
        expiryDate: "2024-12-10",
        status: "Expired",
        skills: ["Apache Kafka", "Streaming", "Event Processing", "Big Data"],
        description: "Demonstrates expertise in developing applications with Apache Kafka.",
        link: "https://www.confluent.io/certification"
    },
    {
        id: 7,
        title: "Jenkins Engineer Certification",
        issuer: "Linux Foundation",
        credentialId: "JENKINS-ENG-2023",
        issuedDate: "2023-08-22",
        expiryDate: "2025-08-22",
        status: "Active",
        skills: ["Jenkins", "CI/CD", "DevOps", "Automation", "Pipeline"],
        description: "Validates proficiency in using and administering Jenkins for continuous integration and delivery.",
        link: "https://www.linuxfoundation.org"
    },
    {
        id: 8,
        title: "Oracle Certified Associate Java Programmer",
        issuer: "Oracle",
        credentialId: "OCAJP-2023-6789",
        issuedDate: "2023-09-12",
        expiryDate: null,
        status: "Lifetime",
        skills: ["Java", "OOP", "Programming", "Java 8+", "Core Concepts"],
        description: "Demonstrates knowledge of Java programming fundamentals and core concepts.",
        link: "https://www.oracle.com/certification/ocajp"
    }
];

// ==================== BOOKS PAGINATION VARIABLES ====================
let currentBookPage = 1;
const booksPerPage = 2;
let filteredBooks = [...booksData];
let currentBookSortBy = 'alphabetical';
let currentCategoryFilter = '';
let currentBookSearchTerm = '';

// ==================== UDEMY PAGINATION VARIABLES ====================
let currentPage = 1;
const coursesPerPage = 2;
let filteredCourses = [...udemyCoursesData];
let currentSortBy = 'recent';
let currentStatusFilter = '';
let currentSearchTerm = '';

// ==================== CERTIFICATES PAGINATION VARIABLES ====================
let currentCertPage = 1;
const certsPerPage = 2;
let filteredCerts = [...certificatesData];
let currentCertSortBy = 'issued';
let currentCertStatusFilter = '';
let currentCertSearchTerm = '';

// ==================== RENDER BOOKS FUNCTION ====================
function renderBooks(page) {
    const container = document.getElementById('booksContainer');
    container.innerHTML = '';

    const startIndex = (page - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = filteredBooks.slice(startIndex, endIndex);

    if (booksToDisplay.length === 0) {
        container.innerHTML = `
            <div class="no-courses-message" style="grid-column: 1 / -1;">
                <p>😔 No books found matching your criteria.</p>
                <button onclick="resetBookFilters()" class="reset-filters-btn">Reset Filters</button>
            </div>
        `;
        updateBookPageInfo();
        return;
    }

    for (let i = 0; i < booksToDisplay.length; i++) {
        const book = booksToDisplay[i];

        const bookCard = document.createElement('div');
        bookCard.className = 'resource-card';
        bookCard.setAttribute('data-book-id', book.id);
        bookCard.innerHTML = `
            <div class="resource-icon">📘</div>
            <h4>${highlightBookSearchTerm(book.title)}</h4>
            <p class="author">${highlightBookSearchTerm(book.author)}</p>
            <div class="book-meta">
                <span class="book-category">${book.category}</span>
                <span class="book-year">${book.year}</span>
            </div>
            <p class="description">${highlightBookSearchTerm(book.description)}</p>
            <div class="book-topics">
                ${book.keyTopics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
            </div>
            <div class="book-rating">
                ${'⭐'.repeat(book.rating)} (${book.rating}/5)
            </div>
        `;

        container.appendChild(bookCard);
    }

    updateBookPageInfo();

    const cards = document.querySelectorAll('[data-book-id]');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
    });
}

function highlightBookSearchTerm(text) {
    if (!currentBookSearchTerm) return text;
    const regex = new RegExp(`(${currentBookSearchTerm})`, 'gi');
    return text.replace(regex, '<mark>\$1</mark>');
}

function updateBookPageInfo() {
    const pageNumber = document.getElementById('bookPageNumber');
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    pageNumber.textContent = `Page ${currentBookPage} of ${totalPages || 1}`;

    const pagination = document.getElementById('booksPagination');
    if (pagination) {
        const prevBtn = pagination.querySelector('.prev-btn');
        const nextBtn = pagination.querySelector('.next-btn');

        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentBookPage === 1 || filteredBooks.length === 0;
            nextBtn.disabled = currentBookPage === totalPages || filteredBooks.length === 0;
        }
    }

    updateBookResultsCount();
}

function updateBookResultsCount() {
    const bookCount = document.getElementById('bookCount');
    const total = filteredBooks.length;

    if (currentBookSearchTerm || currentCategoryFilter) {
        bookCount.textContent = `Found ${total} book${total !== 1 ? 's' : ''}`;
    } else {
        bookCount.textContent = `Showing all ${total} books`;
    }
}

function handleBookSearch() {
    const searchInput = document.getElementById('bookSearch');
    currentBookSearchTerm = searchInput.value.toLowerCase().trim();
    currentBookPage = 1;
    applyBookFilters();
}

function clearBookSearch() {
    document.getElementById('bookSearch').value = '';
    currentBookSearchTerm = '';
    currentBookPage = 1;
    applyBookFilters();
}

function applyBookFilters() {
    currentCategoryFilter = document.getElementById('categoryFilter').value;

    filteredBooks = booksData.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(currentBookSearchTerm) ||
            book.author.toLowerCase().includes(currentBookSearchTerm) ||
            book.description.toLowerCase().includes(currentBookSearchTerm) ||
            book.keyTopics.some(topic => topic.toLowerCase().includes(currentBookSearchTerm));

        const matchesCategory = currentCategoryFilter === '' || book.category === currentCategoryFilter;

        return matchesSearch && matchesCategory;
    });

    applyBookSort();
}

function applyBookSort() {
    currentBookSortBy = document.getElementById('bookSortBy').value;

    switch (currentBookSortBy) {
        case 'author':
            filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
            break;
        case 'category':
            filteredBooks.sort((a, b) => {
                if (a.category === b.category) {
                    return a.title.localeCompare(b.title);
                }
                return a.category.localeCompare(b.category);
            });
            break;
        case 'alphabetical':
        default:
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }

    currentBookPage = 1;
    renderBooks(currentBookPage);
}

function resetBookFilters() {
    document.getElementById('bookSearch').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('bookSortBy').value = 'alphabetical';

    currentBookSearchTerm = '';
    currentCategoryFilter = '';
    currentBookSortBy = 'alphabetical';
    currentBookPage = 1;

    filteredBooks = [...booksData];
    applyBookSort();
}

// ==================== BOOKS PAGINATION NAVIGATION ====================
function nextBookPage() {
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    if (currentBookPage < totalPages) {
        currentBookPage++;
        renderBooks(currentBookPage);
        scrollToBookSection();
    }
}

function previousBookPage() {
    if (currentBookPage > 1) {
        currentBookPage--;
        renderBooks(currentBookPage);
        scrollToBookSection();
    }
}

function scrollToBookSection() {
    const booksSection = document.getElementById('booksCategory');
    if (booksSection) {
        booksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function exportBooksToJSON() {
    const dataToExport = {
        exportDate: new Date().toISOString(),
        totalBooks: booksData.length,
        categories: [...new Set(booksData.map(b => b.category))],
        books: booksData
    };

    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `yuvraj-books-${new Date().toISOString().split('T')[0]}.json`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showNotification('✅ Books exported successfully as JSON!');
}

// ==================== RENDER UDEMY COURSES FUNCTION ====================
function renderUdemyCourses(page) {
    const container = document.getElementById('udemyCoursesContainer');
    container.innerHTML = '';

    const startIndex = (page - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const coursesToDisplay = filteredCourses.slice(startIndex, endIndex);

    if (coursesToDisplay.length === 0) {
        container.innerHTML = `
            <div class="no-courses-message">
                <p>😔 No courses found matching your criteria.</p>
                <button onclick="resetFilters()" class="reset-filters-btn">Reset Filters</button>
            </div>
        `;
        updatePageInfo();
        return;
    }

    for (let i = 0; i < coursesToDisplay.length; i++) {
        const course = coursesToDisplay[i];
        const statusClass = course.status === 'Completed' ? 'status-completed' : 'status-inprogress';

        const courseCard = document.createElement('div');
        courseCard.className = 'udemy-card';
        courseCard.setAttribute('data-course-id', course.id);
        courseCard.innerHTML = `
            <div class="udemy-logo">🎬</div>
            <h4>${highlightSearchTerm(course.title)}</h4>
            <p class="instructor ${statusClass}">${course.status}</p>
            <p class="course-description">${highlightSearchTerm(course.description)}</p>
            <div class="course-tags">
                ${course.tags.map(tag => `<span class="course-tag">${tag}</span>`).join('')}
            </div>
        `;

        container.appendChild(courseCard);
    }

    updatePageInfo();

    const cards = document.querySelectorAll('[data-course-id]');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
    });
}

function highlightSearchTerm(text) {
    if (!currentSearchTerm) return text;
    const regex = new RegExp(`(${currentSearchTerm})`, 'gi');
    return text.replace(regex, '<mark>\$1</mark>');
}

function updatePageInfo() {
    const pageNumber = document.getElementById('pageNumber');
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    pageNumber.textContent = `Page ${currentPage} of ${totalPages || 1}`;

    const pagination = document.getElementById('udemyPagination');
    if (pagination) {
        const prevBtn = pagination.querySelector('.prev-btn');
        const nextBtn = pagination.querySelector('.next-btn');

        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentPage === 1 || filteredCourses.length === 0;
            nextBtn.disabled = currentPage === totalPages || filteredCourses.length === 0;
        }
    }

    updateResultsCount();
}

function updateResultsCount() {
    const courseCount = document.getElementById('courseCount');
    const total = filteredCourses.length;
    const completed = filteredCourses.filter(c => c.status === 'Completed').length;
    const inProgress = filteredCourses.filter(c => c.status === 'In Progress').length;

    if (currentSearchTerm || currentStatusFilter) {
        courseCount.textContent = `Found ${total} course${total !== 1 ? 's' : ''} (${completed} Completed, ${inProgress} In Progress)`;
    } else {
        courseCount.textContent = `Showing all ${total} courses (${completed} Completed, ${inProgress} In Progress)`;
    }
}

function handleSearch() {
    const searchInput = document.getElementById('courseSearch');
    currentSearchTerm = searchInput.value.toLowerCase().trim();
    currentPage = 1;
    applyFilters();
}

function clearSearch() {
    document.getElementById('courseSearch').value = '';
    currentSearchTerm = '';
    currentPage = 1;
    applyFilters();
}

function applyFilters() {
    currentStatusFilter = document.getElementById('statusFilter').value;

    filteredCourses = udemyCoursesData.filter(course => {
        const matchesSearch =
            course.title.toLowerCase().includes(currentSearchTerm) ||
            course.description.toLowerCase().includes(currentSearchTerm) ||
            course.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm));

        const matchesStatus = currentStatusFilter === '' || course.status === currentStatusFilter;

        return matchesSearch && matchesStatus;
    });

    applySort();
}

function applySort() {
    currentSortBy = document.getElementById('sortBy').value;

    switch (currentSortBy) {
        case 'alphabetical':
            filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'status':
            filteredCourses.sort((a, b) => {
                if (a.status === b.status) {
                    return a.title.localeCompare(b.title);
                }
                return a.status === 'Completed' ? -1 : 1;
            });
            break;
        case 'recent':
        default:
            filteredCourses.sort((a, b) => {
                const dateA = new Date(a.dateCompleted || '9999-12-31');
                const dateB = new Date(b.dateCompleted || '9999-12-31');
                return dateB - dateA;
            });
            break;
    }

    currentPage = 1;
    renderUdemyCourses(currentPage);
}

function resetFilters() {
    document.getElementById('courseSearch').value = '';
    document.getElementById('statusFilter').value = '';
    document.getElementById('sortBy').value = 'recent';

    currentSearchTerm = '';
    currentStatusFilter = '';
    currentSortBy = 'recent';
    currentPage = 1;

    filteredCourses = [...udemyCoursesData];
    applySort();
}

// ==================== UDEMY PAGINATION NAVIGATION ====================
function nextPage() {
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        renderUdemyCourses(currentPage);
        scrollToUdemySection();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderUdemyCourses(currentPage);
        scrollToUdemySection();
    }
}

function scrollToUdemySection() {
    const udemySection = document.getElementById('udemyCategory');
    if (udemySection) {
        udemySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function exportCoursesToJSON() {
    const dataToExport = {
        exportDate: new Date().toISOString(),
        totalCourses: udemyCoursesData.length,
        completedCourses: udemyCoursesData.filter(c => c.status === 'Completed').length,
        inProgressCourses: udemyCoursesData.filter(c => c.status === 'In Progress').length,
        courses: udemyCoursesData
    };

    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `yuvraj-udemy-courses-${new Date().toISOString().split('T')[0]}.json`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showNotification('✅ Courses exported successfully as JSON!');
}

// ==================== RENDER CERTIFICATES FUNCTION ====================
function renderCertificates(page) {
    const container = document.getElementById('certificatesContainer');
    container.innerHTML = '';

    const startIndex = (page - 1) * certsPerPage;
    const endIndex = startIndex + certsPerPage;
    const certsToDisplay = filteredCerts.slice(startIndex, endIndex);

    if (certsToDisplay.length === 0) {
        container.innerHTML = `
            <div class="no-courses-message" style="grid-column: 1 / -1;">
                <p>😔 No certificates found matching your criteria.</p>
                <button onclick="resetCertFilters()" class="reset-filters-btn">Reset Filters</button>
            </div>
        `;
        updateCertPageInfo();
        return;
    }

    for (let i = 0; i < certsToDisplay.length; i++) {
        const cert = certsToDisplay[i];

        let statusColor = 'status-active';
        if (cert.status === 'Expired') statusColor = 'status-expired';
        if (cert.status === 'Lifetime') statusColor = 'status-lifetime';

        const issuedDate = new Date(cert.issuedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        const expiryDate = cert.expiryDate
            ? new Date(cert.expiryDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
            : 'Lifetime';

        let expiringSoon = false;
        if (cert.expiryDate) {
            const daysUntilExpiry = Math.floor((new Date(cert.expiryDate) - new Date()) / (1000 * 60 * 60 * 24));
            expiringSoon = daysUntilExpiry > 0 && daysUntilExpiry <= 30;
        }

        const certCard = document.createElement('div');
        certCard.className = 'certificate-card';
        if (expiringSoon) certCard.classList.add('expiring-soon');
        certCard.setAttribute('data-cert-id', cert.id);
        certCard.innerHTML = `
            <div class="cert-icon">🎖️</div>
            <h4>${highlightCertSearchTerm(cert.title)}</h4>
            <p class="issuer">${highlightCertSearchTerm(cert.issuer)}</p>
            <div class="cert-status ${statusColor}">${cert.status}</div>
            <div class="cert-details">
                <div class="cert-detail-item">
                    <span class="label">Issued:</span>
                    <span class="value">${issuedDate}</span>
                </div>
                <div class="cert-detail-item">
                    <span class="label">Expires:</span>
                    <span class="value">${expiryDate}</span>
                </div>
                <div class="cert-detail-item">
                    <span class="label">ID:</span>
                    <span class="value cert-id">${cert.credentialId}</span>
                </div>
            </div>
            <div class="cert-tags">
                ${cert.skills.map(skill => `<span class="cert-tag">${skill}</span>`).join('')}
            </div>
            ${expiringSoon ? '<div class="expiring-warning">⚠️ Expiring Soon</div>' : ''}
            <a href="${cert.link}" target="_blank" class="view-cert-btn">View Credential →</a>
        `;

        container.appendChild(certCard);
    }

    updateCertPageInfo();

    const cards = document.querySelectorAll('[data-cert-id]');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
    });
}

function highlightCertSearchTerm(text) {
    if (!currentCertSearchTerm) return text;
    const regex = new RegExp(`(${currentCertSearchTerm})`, 'gi');
    return text.replace(regex, '<mark>\$1</mark>');
}

function updateCertPageInfo() {
    const pageNumber = document.getElementById('certPageNumber');
    const totalPages = Math.ceil(filteredCerts.length / certsPerPage);

    pageNumber.textContent = `Page ${currentCertPage} of ${totalPages || 1}`;

    const pagination = document.getElementById('certsPagination');
    if (pagination) {
        const prevBtn = pagination.querySelector('.prev-btn');
        const nextBtn = pagination.querySelector('.next-btn');

        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentCertPage === 1 || filteredCerts.length === 0;
            nextBtn.disabled = currentCertPage === totalPages || filteredCerts.length === 0;
        }
    }

    updateCertResultsCount();
}

function updateCertResultsCount() {
    const certCount = document.getElementById('certCount');
    const total = filteredCerts.length;
    const active = filteredCerts.filter(c => c.status === 'Active').length;
    const expired = filteredCerts.filter(c => c.status === 'Expired').length;
    const lifetime = filteredCerts.filter(c => c.status === 'Lifetime').length;

    if (currentCertSearchTerm || currentCertStatusFilter) {
        certCount.textContent = `Found ${total} certificate${total !== 1 ? 's' : ''} (${active} Active, ${expired} Expired, ${lifetime} Lifetime)`;
    } else {
        certCount.textContent = `Showing all ${total} certificates (${active} Active, ${expired} Expired, ${lifetime} Lifetime)`;
    }
}

function handleCertSearch() {
    const searchInput = document.getElementById('certSearch');
    currentCertSearchTerm = searchInput.value.toLowerCase().trim();
    currentCertPage = 1;
    applyCertFilters();
}

function clearCertSearch() {
    document.getElementById('certSearch').value = '';
    currentCertSearchTerm = '';
    currentCertPage = 1;
    applyCertFilters();
}

function applyCertFilters() {
    currentCertStatusFilter = document.getElementById('certStatusFilter').value;

    filteredCerts = certificatesData.filter(cert => {
        const matchesSearch =
            cert.title.toLowerCase().includes(currentCertSearchTerm) ||
            cert.issuer.toLowerCase().includes(currentCertSearchTerm) ||
            cert.credentialId.toLowerCase().includes(currentCertSearchTerm) ||
            cert.skills.some(skill => skill.toLowerCase().includes(currentCertSearchTerm));

        const matchesStatus = currentCertStatusFilter === '' || cert.status === currentCertStatusFilter;

        return matchesSearch && matchesStatus;
    });

    applyCertSort();
}

function applyCertSort() {
    currentCertSortBy = document.getElementById('certSortBy').value;

    switch (currentCertSortBy) {
        case 'alphabetical':
            filteredCerts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'issuer':
            filteredCerts.sort((a, b) => a.issuer.localeCompare(b.issuer));
            break;
        case 'expiry':
            filteredCerts.sort((a, b) => {
                const dateA = new Date(a.expiryDate || '9999-12-31');
                const dateB = new Date(b.expiryDate || '9999-12-31');
                return dateA - dateB;
            });
            break;
        case 'issued':
        default:
            filteredCerts.sort((a, b) => {
                const dateA = new Date(a.issuedDate);
                const dateB = new Date(b.issuedDate);
                return dateB - dateA;
            });
            break;
    }

    currentCertPage = 1;
    renderCertificates(currentCertPage);
}

function resetCertFilters() {
    document.getElementById('certSearch').value = '';
    document.getElementById('certStatusFilter').value = '';
    document.getElementById('certSortBy').value = 'issued';

    currentCertSearchTerm = '';
    currentCertStatusFilter = '';
    currentCertSortBy = 'issued';
    currentCertPage = 1;

    filteredCerts = [...certificatesData];
    applyCertSort();
}

// ==================== CERTIFICATES PAGINATION NAVIGATION ====================
function nextCertPage() {
    const totalPages = Math.ceil(filteredCerts.length / certsPerPage);
    if (currentCertPage < totalPages) {
        currentCertPage++;
        renderCertificates(currentCertPage);
        scrollToCertSection();
    }
}

function previousCertPage() {
    if (currentCertPage > 1) {
        currentCertPage--;
        renderCertificates(currentCertPage);
        scrollToCertSection();
    }
}

function scrollToCertSection() {
    const certSection = document.getElementById('certificatesCategory');
    if (certSection) {
        certSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function exportCertsToJSON() {
    const dataToExport = {
        exportDate: new Date().toISOString(),
        totalCertificates: certificatesData.length,
        activeCertificates: certificatesData.filter(c => c.status === 'Active').length,
        expiredCertificates: certificatesData.filter(c => c.status === 'Expired').length,
        lifetimeCertificates: certificatesData.filter(c => c.status === 'Lifetime').length,
        certificates: certificatesData
    };

    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `yuvraj-certificates-${new Date().toISOString().split('T')[0]}.json`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showNotification('✅ Certificates exported successfully as JSON!');
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ==================== IMPROVED KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    const bookSearch = document.getElementById('bookSearch');
    const courseSearch = document.getElementById('courseSearch');
    const certSearch = document.getElementById('certSearch');
    const activeElement = document.activeElement;

    if (e.key === 'ArrowRight') {
        e.preventDefault();

        if (activeElement === bookSearch) {
            nextBookPage();
        } else if (activeElement === courseSearch) {
            nextPage();
        } else if (activeElement === certSearch) {
            nextCertPage();
        }
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();

        if (activeElement === bookSearch) {
            previousBookPage();
        } else if (activeElement === courseSearch) {
            previousPage();
        } else if (activeElement === certSearch) {
            previousCertPage();
        }
    }

    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (courseSearch) courseSearch.focus();
    }

    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        if (bookSearch) bookSearch.focus();
    }

    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        if (certSearch) certSearch.focus();
    }

    if (e.key === 'Escape') {
        if (activeElement === bookSearch) clearBookSearch();
        if (activeElement === courseSearch) clearSearch();
        if (activeElement === certSearch) clearCertSearch();
        document.activeElement.blur();
    }
});

// ==================== INITIALIZE ALL SECTIONS ON PAGE LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    applyBookSort();
    renderBooks(1);
    applySort();
    renderUdemyCourses(1);
    applyCertSort();
    renderCertificates(1);
});

// ==================== SMOOTH SCROLLING FOR NAVIGATION LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== ADD ACTIVE STATE TO NAVBAR LINKS ON SCROLL ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--secondary-color)';
            link.style.fontWeight = '700';
        }
    });
});

// ==================== ANIMATE ELEMENTS ON SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .skill-category, .resource-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== PARALLAX EFFECT ON HERO SECTION ====================
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});
// ==================== VISITOR COUNTER ====================
function initializeVisitorCounter() {
    const visitCountElement = document.getElementById('visitCount');

    if (visitCountElement) {
        // Using visitor badge - auto-increments with each visit
        // Format: https://visitor-badge.laobi.icu/badge?page_id={namespace}.{page_id}
        const badgeUrl = 'https://visitor-badge.laobi.icu/badge?page_id=yuvraj-portfolio.home&title=Visitors&color=blue&style=flat';

        const badge = document.createElement('img');
        badge.src = badgeUrl;
        badge.alt = 'Visitor Count Badge';
        badge.style.height = '25px';
        badge.style.borderRadius = '6px';

        visitCountElement.innerHTML = '';
        visitCountElement.appendChild(badge);
    }
}

document.addEventListener('DOMContentLoaded', initializeVisitorCounter);
