/**
 * charts.js - Library untuk visualisasi data sekolah
 * Versi: 1.0.0
 * Author: Tim IT SMA Negeri 1 Mandiri
 */

class SchoolCharts {
    constructor() {
        this.charts = {};
        this.colors = {
            primary: '#1e3a8a',
            secondary: '#3b82f6',
            success: '#10b981',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#06b6d4',
            purple: '#8b5cf6',
            pink: '#ec4899',
            gray: '#6b7280'
        };
        
        this.chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 58, 138, 0.9)',
                    titleFont: {
                        family: "'Poppins', sans-serif",
                        size: 13
                    },
                    bodyFont: {
                        family: "'Roboto', sans-serif",
                        size: 12
                    },
                    padding: 10,
                    cornerRadius: 5
                }
            }
        };
        
        this.init();
    }
    
    init() {
        // Initialize charts when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.initAllCharts();
            this.setupResizeHandler();
        });
    }
    
    initAllCharts() {
        // Check for each chart container and initialize
        if (document.getElementById('studentDistributionChart')) {
            this.createStudentDistributionChart();
        }
        
        if (document.getElementById('achievementChart')) {
            this.createAchievementChart();
        }
        
        if (document.getElementById('teacherQualificationChart')) {
            this.createTeacherQualificationChart();
        }
        
        if (document.getElementById('facilityUtilizationChart')) {
            this.createFacilityUtilizationChart();
        }
        
        if (document.getElementById('alumniSuccessChart')) {
            this.createAlumniSuccessChart();
        }
        
        if (document.getElementById('academicPerformanceChart')) {
            this.createAcademicPerformanceChart();
        }
        
        if (document.getElementById('extracurricularChart')) {
            this.createExtracurricularChart();
        }
        
        if (document.getElementById('ppdbStatisticsChart')) {
            this.createPPDBStatisticsChart();
        }
    }
    
    setupResizeHandler() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                Object.values(this.charts).forEach(chart => {
                    if (chart) chart.resize();
                });
            }, 250);
        });
    }
    
    createStudentDistributionChart() {
        const ctx = document.getElementById('studentDistributionChart').getContext('2d');
        
        this.charts.studentDistribution = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Kelas X', 'Kelas XI', 'Kelas XII'],
                datasets: [{
                    data: [240, 240, 240],
                    backgroundColor: [
                        this.colors.primary,
                        this.colors.secondary,
                        this.colors.success
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                ...this.chartOptions,
                plugins: {
                    ...this.chartOptions.plugins,
                    title: {
                        display: true,
                        text: 'Distribusi Siswa per Tingkat',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                cutout: '70%',
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
    
    createAchievementChart() {
        const ctx = document.getElementById('achievementChart').getContext('2d');
        
        this.charts.achievement = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                datasets: [
                    {
                        label: 'Tingkat Kota',
                        data: [15, 18, 22, 25, 28],
                        backgroundColor: this.colors.primary,
                        borderColor: this.colors.primary,
                        borderWidth: 1
                    },
                    {
                        label: 'Tingkat Provinsi',
                        data: [8, 10, 12, 15, 18],
                        backgroundColor: this.colors.secondary,
                        borderColor: this.colors.secondary,
                        borderWidth: 1
                    },
                    {
                        label: 'Tingkat Nasional',
                        data: [3, 4, 6, 8, 10],
                        backgroundColor: this.colors.success,
                        borderColor: this.colors.success,
                        borderWidth: 1
                    },
                    {
                        label: 'Tingkat Internasional',
                        data: [0, 1, 1, 2, 3],
                        backgroundColor: this.colors.warning,
                        borderColor: this.colors.warning,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                ...this.chartOptions,
                plugins: {
                    ...this.chartOptions.plugins,
                    title: {
                        display: true,
                        text: 'Prestasi Sekolah 5 Tahun Terakhir',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: "'Roboto', sans-serif"
                            }
                        },
                        title: {
                            display: true,
                            text: 'Jumlah Penghargaan',
                            font: {
                                family: "'Poppins', sans-serif",
                                size: 12,
                                weight: '500'
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: "'Roboto', sans-serif"
                            }
                        }
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    
    createTeacherQualificationChart() {
        const ctx = document.getElementById('teacherQualificationChart').getContext('2d');
        
        this.charts.teacherQualification = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['S3 (Doktor)', 'S2 (Magister)', 'S1 (Sarjana)', 'D4/D3'],
                datasets: [{
                    data: [5, 25, 12, 3],
                    backgroundColor: [
                        this.colors.primary,
                        this.colors.secondary,
                        this.colors.success,
                        this.colors.info
                    ],
                    borderWidth: 3,
                    borderColor: '#ffffff',
                    hoverOffset: 15
                }]
            },
            options: {
                ...this.chartOptions,
                plugins: {
                    ...this.chartOptions.plugins,
                    title: {
                        display: true,
                        text: 'Kualifikasi Pendidikan Guru',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
    
    createFacilityUtilizationChart() {
        const ctx = document.getElementById('facilityUtilizationChart').getContext('2d');
        
        this.charts.facilityUtilization = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Ruang Kelas', 'Laboratorium', 'Perpustakaan', 'Lapangan Olahraga', 'Ruang Multimedia', 'Kantin'],
                datasets: [{
                    label: 'Tingkat Pemanfaatan (%)',
                    data: [95, 85, 70, 65, 80, 90],
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderColor: this.colors.secondary,
                    borderWidth: 2,
                    pointBackgroundColor: this.colors.primary,
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                ...this.chartOptions,
                plugins: {
                    ...this.chartOptions.plugins,
                    title: {
                        display: true,
                        text: 'Tingkat Pemanfaatan Fasilitas',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        pointLabels: {
                            font: {
                                family: "'Roboto', sans-serif",
                                size: 11
                            }
                        },
                        ticks: {
                            backdropColor: 'transparent',
                            font: {
                                family: "'Roboto', sans-serif"
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    
    createAlumniSuccessChart() {
        const ctx = document.getElementById('alumniSuccessChart').getContext('2d');
        
        this.charts.alumniSuccess = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [
                    {
                        label: 'PTN Negeri',
                        data: [65, 68, 70, 72, 75],
                        borderColor: this.colors.primary,
                        backgroundColor: 'rgba(30, 58, 138, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: this.colors.primary,
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    },
                    {
                        label: 'PTN Swasta',
                        data: [20, 18, 17, 16, 15],
                        borderColor: this.colors.secondary,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: this.colors.secondary,
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    },
                    {
                        label: 'PTS',
                        data: [10, 9, 8, 7, 6],
                        borderColor: this.colors.success,
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: this.colors.success,
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    },
                    {
                        label: 'Bekerja',
                        data: [5, 5, 5, 5, 4],
                        borderColor: this.colors.warning,
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: this.colors.warning,
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    }
                ]
            },
            options: {
                ...this.chartOptions,
                plugins: {
                    ...this.chartOptions.plugins,
                    title: {
                        display: true,
                        text: 'Tren Kelulusan Alumni (%)',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 0,
                        max: 80,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: "'Roboto', sans-serif"
                            },
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        title: {
                            display: true,
                            text: 'Persentase',
                            font: {
                                family: "'Poppins', sans-serif",
                                size: 12,
                                weight: '500'
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: "'Roboto', sans-serif"
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    
    createAcademicPerformanceChart() {
        const ctx = document.getElementById('academicPerformanceChart').getContext('2d');
        
        this.charts.academicPerformance = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Matematika', 'Fisika', 'Kimia', 'Biologi', 'Bahasa Indonesia', 'Bahasa Inggris', 'Sejarah', 'Ekonomi'],
                datasets: [
                    {
                        label: 'Nilai Rata-rata UTBK',
                        data: [78.5, 82.3, 80.1, 79.8, 85.2, 83.7, 76.4, 81.9],
                        backgroundColor: this.colors.primary,
                        borderColor: this.colors.primary,
                        borderWidth: 1,
                        borderRadius: 5
                    },
                    {
                        label: 'Nilai Rata-rata Nasional',
                        data: [65.2, 68.7, 66.4, 67.1, 70.3, 69.8, 64.5, 68.2],
                        backgroundColor: this.colors.gray,
                        borderColor: this.colors.gray,
                        borderWidth: 1,
                        borderRadius: 5
                    }
                ]
            },
            options: {
                ...this.chartOptions,
                indexAxis: 'y',
                plugins: {
                    ...this.chartOptions.plugins,
                    title: {
                        display: true,
                        text: 'Perbandingan Nilai Akademik dengan Nasional',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: "'Roboto', sans-serif"
                            },
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        title: {
                            display: true,
                            text: 'Nilai Rata-rata',
                            font: {
                                family: "'Poppins', sans-serif",
                                size: 12,
                                weight: '500'
                            }
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: "'Roboto', sans-serif",
                                size: 12
                            }
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    
    createExtracurricularChart() {
        const ctx = document.getElementById('extracurricularChart').getContext('2d');
        
        this.charts.extracurricular = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Olahraga', 'Seni & Budaya', 'Sains & Teknologi', 'Pengembangan Diri', 'Keagamaan', 'Jurnalistik'],
                datasets: [{
                    data: [180, 120, 90, 150, 60, 40],
                    backgroundColor: [
                        this.colors.primary,
                        this.colors.secondary,
                        this.colors.success,
                        this.colors.warning,
                        this.colors.danger,
                        this.colors.purple
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                ...this.chartOptions,
                plugins: {
                    ...this.chartOptions.plugins,
                    title: {
                        display: true,
                        text: 'Partisipasi Ekstrakurikuler (Jumlah Siswa)',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                scales: {
                    r: {
                        ticks: {
                            display: false,
                            backdropColor: 'transparent'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        pointLabels: {
                            font: {
                                family: "'Roboto', sans-serif",
                                size: 11
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true
                }
            }
        });
    }
    
    createPPDBStatisticsChart() {
        const ctx = document.getElementById('ppdbStatisticsChart').getContext('2d');
        
        this.charts.ppdbStatistics = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023'],
                datasets: [
                    {
                        label: 'Jumlah Pendaftar',
                        data: [850, 920, 1050, 1200, 1350],
                        borderColor: this.colors.primary,
                        backgroundColor: 'rgba(30, 58, 138, 0.1)',
                        borderWidth: 4,
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: this.colors.primary,
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 7
                    },
                    {
                        label: 'Jumlah Diterima',
                        data: [240, 240, 240, 240, 240],
                        borderColor: this.colors.success,
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 4,
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: this.colors.success,
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 7,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                ...this.chartOptions,
                plugins: {
                    ...this.chartOptions.plugins,
                    title: {
                        display: true,
                        text: 'Statistik PPDB 5 Tahun Terakhir',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 16,
                            weight: '600'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: "'Roboto', sans-serif"
                            },
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        },
                        title: {
                            display: true,
                            text: 'Jumlah Siswa',
                            font: {
                                family: "'Poppins', sans-serif",
                                size: 12,
                                weight: '500'
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: "'Roboto', sans-serif"
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    
    // Utility methods
    destroyChart(chartName) {
        if (this.charts[chartName]) {
            this.charts[chartName].destroy();
            delete this.charts[chartName];
        }
    }
    
    destroyAllCharts() {
        Object.keys(this.charts).forEach(chartName => {
            this.destroyChart(chartName);
        });
        this.charts = {};
    }
    
    updateChartData(chartName, newData) {
        if (this.charts[chartName]) {
            this.charts[chartName].data = newData;
            this.charts[chartName].update();
        }
    }
    
    getChartInstance(chartName) {
        return this.charts[chartName];
    }
    
    exportChartAsImage(chartName, filename = 'chart.png') {
        if (this.charts[chartName]) {
            const link = document.createElement('a');
            link.download = filename;
            link.href = this.charts[chartName].toBase64Image();
            link.click();
        }
    }
    
    printChart(chartName) {
        if (this.charts[chartName]) {
            const chartWindow = window.open('', '_blank');
            chartWindow.document.write(`
                <html>
                    <head>
                        <title>Cetak Chart - SMA Negeri 1 Mandiri</title>
                        <style>
                            body { 
                                font-family: 'Poppins', sans-serif; 
                                padding: 40px; 
                                text-align: center; 
                            }
                            .chart-container { 
                                max-width: 800px; 
                                margin: 0 auto; 
                            }
                            .header { 
                                margin-bottom: 30px; 
                            }
                            .footer { 
                                margin-top: 30px; 
                                color: #666; 
                                font-size: 14px; 
                            }
                        </style>
                    </head>
                    <body>
                        <div class="header">
                            <h2>SMA Negeri 1 Mandiri</h2>
                            <p>Visualisasi Data Sekolah</p>
                        </div>
                        <div class="chart-container">
                            <img src="${this.charts[chartName].toBase64Image()}" style="width:100%;">
                        </div>
                        <div class="footer">
                            <p>Dicetak pada: ${new Date().toLocaleDateString('id-ID', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</p>
                        </div>
                    </body>
                </html>
            `);
            chartWindow.document.close();
            chartWindow.focus();
            setTimeout(() => {
                chartWindow.print();
            }, 500);
        }
    }
}

// Initialize SchoolCharts globally
window.SchoolCharts = new SchoolCharts();

// Helper function untuk membuat chart custom
function createCustomChart(canvasId, type, data, options = {}) {
    const ctx = document.getElementById(canvasId)?.getContext('2d');
    if (!ctx) return null;
    
    const defaultOptions = window.SchoolCharts.chartOptions;
    const mergedOptions = deepMerge(defaultOptions, options);
    
    const chart = new Chart(ctx, {
        type: type,
        data: data,
        options: mergedOptions
    });
    
    window.SchoolCharts.charts[canvasId] = chart;
    return chart;
}

// Helper function untuk deep merge objects
function deepMerge(target, source) {
    const output = Object.assign({}, target);
    
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    
    return output;
}

function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

// Chart data untuk halaman tertentu
const ChartData = {
    // Data untuk halaman prestasi
    achievements: {
        byYear: {
            2023: { kota: 28, provinsi: 18, nasional: 10, internasional: 3 },
            2022: { kota: 25, provinsi: 15, nasional: 8, internasional: 2 },
            2021: { kota: 22, provinsi: 12, nasional: 6, internasional: 1 },
            2020: { kota: 18, provinsi: 10, nasional: 4, internasional: 1 },
            2019: { kota: 15, provinsi: 8, nasional: 3, internasional: 0 }
        },
        
        byCategory: {
            akademik: 45,
            olahraga: 32,
            seni: 28,
            teknologi: 15,
            lainnya: 20
        }
    },
    
    // Data untuk halaman siswa
    students: {
        distribution: {
            kelas10: { laki: 120, perempuan: 120, total: 240 },
            kelas11: { laki: 115, perempuan: 125, total: 240 },
            kelas12: { laki: 118, perempuan: 122, total: 240 }
        },
        
        academicPerformance: {
            ipa: { fisika: 82.3, kimia: 80.1, biologi: 79.8, matematika: 78.5 },
            ips: { ekonomi: 81.9, geografi: 77.2, sosiologi: 76.8, sejarah: 76.4 },
            bahasa: { indonesia: 85.2, inggris: 83.7, asing: 79.5, sastra: 78.1 }
        }
    },
    
    // Data untuk halaman alumni
    alumni: {
        universityAcceptance: {
            ptn: 75,
            pts: 15,
            luar_negeri: 6,
            bekerja: 4
        },
        
        topUniversities: {
            'UI': 45,
            'ITB': 38,
            'UGM': 32,
            'IPB': 25,
            'UNPAD': 22,
            'ITS': 20,
            'Lainnya': 118
        }
    },
    
    // Data untuk halaman PPDB
    ppdb: {
        yearlyTrend: {
            2023: { pendaftar: 1350, diterima: 240, rasio: 5.6 },
            2022: { pendaftar: 1200, diterima: 240, rasio: 5.0 },
            2021: { pendaftar: 1050, diterima: 240, rasio: 4.4 },
            2020: { pendaftar: 920, diterima: 240, rasio: 3.8 },
            2019: { pendaftar: 850, diterima: 240, rasio: 3.5 }
        },
        
        byProgram: {
            ipa: { pendaftar: 750, diterima: 144 },
            ips: { pendaftar: 450, diterima: 72 },
            bahasa: { pendaftar: 150, diterima: 24 }
        }
    }
};

// Export untuk penggunaan module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SchoolCharts,
        ChartData,
        createCustomChart
    };
}