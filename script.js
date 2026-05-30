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

// ==================== PAGINATION AND FILTERING VARIABLES ====================
let currentPage = 1;
const coursesPerPage = 4;
let filteredCourses = [...udemyCoursesData];
let currentSortBy = 'recent';
let currentStatusFilter = '';
let currentSearchTerm = '';

// ==================== RENDER COURSES FUNCTION ====================
function renderUdemyCourses(page) {
    const container = document.getElementById('udemyCoursesContainer');
    container.innerHTML = '';

    // Calculate start and end index
    const startIndex = (page - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const coursesToDisplay = filteredCourses.slice(startIndex, endIndex);

    // Check if no courses found
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

    // Create course cards using for loop
    for (let i = 0; i < coursesToDisplay.length; i++) {
        const course = coursesToDisplay[i];

        // Create status badge color
        const statusClass = course.status === 'Completed' ? 'status-completed' : 'status-inprogress';

        // Create course card HTML
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

    // Update page info
    updatePageInfo();

    // Add animation
    const cards = document.querySelectorAll('.udemy-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
    });
}

// ==================== HIGHLIGHT SEARCH TERM ====================
function highlightSearchTerm(text) {
    if (!currentSearchTerm) return text;

    const regex = new RegExp(`(${currentSearchTerm})`, 'gi');
    return text.replace(regex, '<mark>\$1</mark>');
}

// ==================== UPDATE PAGE INFO ====================
function updatePageInfo() {
    const pageNumber = document.getElementById('pageNumber');
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    pageNumber.textContent = `Page ${currentPage} of ${totalPages || 1}`;

    // Update button states
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.disabled = currentPage === 1 || filteredCourses.length === 0;
    nextBtn.disabled = currentPage === totalPages || filteredCourses.length === 0;

    // Update results count
    updateResultsCount();
}

// ==================== UPDATE RESULTS COUNT ====================
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

// ==================== SEARCH FUNCTION ====================
function handleSearch() {
    const searchInput = document.getElementById('courseSearch');
    currentSearchTerm = searchInput.value.toLowerCase().trim();
    currentPage = 1;

    applyFilters();
}

// ==================== CLEAR SEARCH ====================
function clearSearch() {
    document.getElementById('courseSearch').value = '';
    currentSearchTerm = '';
    currentPage = 1;
    applyFilters();
}

// ==================== APPLY FILTERS ====================
function applyFilters() {
    // Get current filter values
    currentStatusFilter = document.getElementById('statusFilter').value;

    // Filter courses
    filteredCourses = udemyCoursesData.filter(course => {
        // Search filter
        const matchesSearch =
            course.title.toLowerCase().includes(currentSearchTerm) ||
            course.description.toLowerCase().includes(currentSearchTerm) ||
            course.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm));

        // Status filter
        const matchesStatus = currentStatusFilter === '' || course.status === currentStatusFilter;

        return matchesSearch && matchesStatus;
    });

    // Apply current sort
    applySort();
}

// ==================== APPLY SORTING ====================
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

// ==================== RESET FILTERS ====================
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

// ==================== PAGINATION NAVIGATION ====================
function nextPage() {
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        renderUdemyCourses(currentPage);
        scrollToSection();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderUdemyCourses(currentPage);
        scrollToSection();
    }
}

// ==================== SCROLL TO SECTION ====================
function scrollToSection() {
    const coursesSection = document.querySelector('.resources-category');
    if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    // Arrow keys for pagination
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousPage();
    }

    // Ctrl+K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('courseSearch').focus();
    }

    // Escape to clear search
    if (e.key === 'Escape') {
        clearSearch();
    }
});

// ==================== EXPORT TO JSON ====================
function exportCoursesToJSON() {
    const dataToExport = {
        exportDate: new Date().toISOString(),
        totalCourses: udemyCoursesData.length,
        completedCourses: udemyCoursesData.filter(c => c.status === 'Completed').length,
        inProgressCourses: udemyCoursesData.filter(c => c.status === 'In Progress').length,
        courses: udemyCoursesData
    };

    // Convert to JSON string
    const jsonString = JSON.stringify(dataToExport, null, 2);

    // Create blob
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `yuvraj-udemy-courses-${new Date().toISOString().split('T')[0]}.json`;

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Show confirmation message
    showNotification('✅ Courses exported successfully as JSON!');
}

// ==================== SHOW NOTIFICATION ====================
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

// ==================== IMPORT FROM JSON ====================
function importCoursesFromJSON(file) {
    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.courses && Array.isArray(data.courses)) {
                udemyCoursesData.length = 0;
                udemyCoursesData.push(...data.courses);
                filteredCourses = [...udemyCoursesData];
                currentPage = 1;
                renderUdemyCourses(1);
                showNotification('✅ Courses imported successfully!');
            } else {
                showNotification('❌ Invalid JSON format');
            }
        } catch (error) {
            showNotification('❌ Error importing JSON: ' + error.message);
        }
    };

    reader.readAsText(file);
}

// ==================== INITIALIZE COURSES ON PAGE LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    renderUdemyCourses(1);
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