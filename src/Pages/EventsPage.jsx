import React, { useEffect, useState } from "react";
import { FiX, FiMapPin, FiCalendar, FiArrowRight, FiGrid } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ─── Data ────────────────────────────────────────────────────────────────────

// ─── Constants ─────────────────────────────────────────────────────────────
const UPCOMING_IDS = [

  { id: "u2", year: 2026, image: "/assets/event/incos2026.jpg", tag: "APRIL 2026" },
  { id: "u1", year: 2026, image: "/assets/event/chemexpo2026.jpg", tag: "APRIL 2026" },
  { id: "u3", year: 2026, image: "/assets/event/nyss2026.jpg", tag: "JUNE 2026" },
  { id: "u4", year: 2026, image: "/assets/event/cosmo2024.jpg", tag: "JULY 2026" },
  { id: "u5", year: 2026, image: "/assets/event/iphex2026.jpg", tag: "SEPTEMBER 2026" },
  { id: "u8", year: 2026, image: "/assets/event/incoss2026.jpg", tag: "NOVEMBER 2026" }
];

const PAST_IDS = [
  { id: "p25", year: 2025, image: "/assets/event/incos2025.jpg" },
  { id: "p24", year: 2025, image: "/assets/event/chemexpo2025.jpg" },
  { id: "p26", year: 2025, image: "/assets/event/nyss2025.jpg" },
  { id: "p27", year: 2025, image: "/assets/event/cosmo2024.jpg" },
  { id: "p28", year: 2025, image: "/assets/event/iphex2025.jpg" },
  { id: "p29", year: 2025, image: "/assets/event/beauty2025.jpg" },
  { id: "p31", year: 2025, image: "/assets/event/incoss2025.jpg" },
  { id: "p30", year: 2025, image: "/assets/event/cphi2024.jpg" },
  { id: "p32", year: 2025, image: "/assets/event/global2025.jpg" },
  { id: "p15", year: 2024, image: "/assets/event/chemexpo2024.jpg" },
  { id: "p16", year: 2024, image: "/assets/event/incos2024.jpg" },
  { id: "p17", year: 2024, image: "/assets/event/nyss2024.jpg" },
  { id: "p18", year: 2024, image: "/assets/event/fce2024.jpg" },
  { id: "p19", year: 2024, image: "/assets/event/cosmo2024.jpg" },
  { id: "p20", year: 2024, image: "/assets/event/beauty2025.jpg" },
  { id: "p21", year: 2024, image: "/assets/event/incoss2024.jpg" },
  { id: "p22", year: 2024, image: "/assets/event/cphi2024.jpg" },
  { id: "p23", year: 2024, image: "/assets/event/global.jpg" },
  { id: "p4", year: 2023, image: "/assets/event/incos2023.jpg" },
  { id: "p5", year: 2023, image: "/assets/event/chemexpo2023.jpg" },
  { id: "p6", year: 2023, image: "/assets/event/nyss2023.jpg" },
  { id: "p10", year: 2023, image: "/assets/event/cphi2023.jpg" },
  { id: "p11", year: 2023, image: "/assets/event/beauty2023.jpg" },
  { id: "p12", year: 2023, image: "/assets/event/bangkok2023.jpg" },
  { id: "p13", year: 2023, image: "/assets/event/cosmo2023.jpg" },
  { id: "p14", year: 2023, image: "/assets/event/cphi-in2023.jpg" },
];

const ALL_YEARS = [2025, 2024, 2023];

// ─── Component ────────────────────────────────────────────────────────────────

export default function EventsPage() {
  const { t } = useTranslation("events");
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(ALL_YEARS[0]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedEvent(null);
      document.body.style.overflow = "auto";
    }, 300);
  };

  const upcomingEvents = UPCOMING_IDS.map(item => ({
    ...item,
    ...t(`events.${item.id}`, { returnObjects: true })
  }));

  const pastEvents = PAST_IDS.map(item => ({
    ...item,
    ...t(`events.${item.id}`, { returnObjects: true })
  }));

  const filteredPastEvents = pastEvents.filter((e) => e.year === selectedYear);

  return (
    <div className="events-page" style={{ fontFamily: "'Inter', sans-serif", background: "#f9f6f1", minHeight: "100vh" }}>
      <style>{`
        .events-swiper {
          padding: 20px 0 50px !important;
        }
        .events-swiper .swiper-pagination-bullet {
          background: #c17b2a;
          opacity: 0.3;
        }
        .events-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        .events-swiper .swiper-button-next,
        .events-swiper .swiper-button-prev {
          color: #c17b2a;
          background: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transform: scale(0.85);
          transition: all 0.2s;
        }
        .events-swiper .swiper-button-next:after,
        .events-swiper .swiper-button-prev:after {
          font-size: 1.2rem;
          font-weight: 800;
        }
        .events-swiper .swiper-button-next:hover,
        .events-swiper .swiper-button-prev:hover {
          transform: scale(0.95);
          background: #c17b2a;
          color: #fff;
        }
        @media (max-width: 768px) {
          .events-swiper .swiper-button-next,
          .events-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
      {/* ── Hero Banner ───────────────────────────────────────── */}
      <section style={{ position: "relative", width: "100%" }}>
        <img
          src="/assets/BannerImages/newevent.jpg"
          alt="Events"
          style={{ width: "100%", height: "auto", display: "block" }}
          onError={(e) => { e.target.src = "/assets/BannerImages/HOMEPage.jpg"; }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "0 20px"
        }}>
          <h1 style={{
            color: "#fff", fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
            fontWeight: 700, letterSpacing: "0.02em",
            textShadow: "0 2px 16px rgba(0,0,0,0.35)",
            textAlign: "center"
          }}>
            {t("hero.title")}
          </h1>
        </div>
      </section>

      {/* ── Upcoming Events Slideshow ─────────────────────────── */}
      {upcomingEvents.length > 0 && (
        <section style={{ background: "#f9f6f1", padding: "calc(var(--section-padding-y) * 1.5) 0 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
              <h2 style={{
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800,
                color: "#1a1a1a", margin: 0,
              }}>
                {t("sections.upcoming")}
              </h2>
              <div style={{ height: "4px", flex: 1, background: "linear-gradient(to right, #c17b2a 0%, transparent 100%)", marginLeft: "24px", opacity: 0.2 }}></div>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1100: { slidesPerView: 2 }
              }}
              className="events-swiper"
            >
              {upcomingEvents.map((event) => (
                <SwiperSlide key={event.id}>
                  <UpcomingCard key={event.id} event={event} t={t} onClick={() => handleEventClick({ ...event, type: "Upcoming Event" })} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* ── Past Events 3x3 Grid ──────────────────────────────── */}
      <section style={{ background: "#f9f6f1", padding: "48px 0 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ borderBottom: "1px solid #e8e0d5", marginBottom: "40px", pb: "8px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "24px" }}>
              Past Exhibitions
            </h2>
            {/* Year Filter Pills */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap", alignItems: "center" }}>
              {ALL_YEARS.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "50px",
                    border: selectedYear === year ? "2px solid #c17b2a" : "2px solid #e8e0d5",
                    background: selectedYear === year ? "#c17b2a" : "#fff",
                    color: selectedYear === year ? "#fff" : "#7a6a52",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    letterSpacing: "0.02em",
                    boxShadow: selectedYear === year ? "0 4px 12px rgba(193, 123, 42, 0.25)" : "none",
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid - Desktop: 3 columns (3x3 if items=9) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "32px",
          }} className="past-events-grid">
            <style>{`
              @media (min-width: 640px) {
                .past-events-grid { grid-template-columns: repeat(2, 1fr) !important; }
              }
              @media (min-width: 1024px) {
                .past-events-grid { grid-template-columns: repeat(3, 1fr) !important; }
              }
            `}</style>
            {filteredPastEvents.map((event) => (
              <PastCard key={event.id} event={event} onClick={() => handleEventClick({ ...event, type: "Past Event" })} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────── */}
      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} t={t} navigate={navigate} />
      )}
    </div>
  );
}

// ─── Upcoming Card ────────────────────────────────────────────────────────────

function UpcomingCard({ event, onClick, t }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.14)" : "0 2px 12px rgba(0,0,0,0.07)",
        border: hovered ? "1px solid #c17b2a" : "1px solid #e8e0d5",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
          onError={(e) => { e.target.src = "/assets/BannerImages/HOMEPage.jpg"; }}
        />
        {/* Date tag badge */}
        <div style={{
          position: "absolute", top: "14px", left: "14px",
          background: "#c17b2a",
          color: "#fff",
          fontSize: "0.72rem",
          fontWeight: 700,
          padding: "5px 12px",
          borderRadius: "20px",
          letterSpacing: "0.04em",
        }}>
          {event.tag}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1a1a1a", marginBottom: "4px", lineHeight: 1.3 }}>
            {event.title}
          </h3>
          {event.subtitle && (
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#888", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {event.subtitle}
            </p>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555", fontSize: "0.88rem" }}>
          <FiCalendar style={{ color: "#c17b2a", flexShrink: 0 }} />
          <span>{event.date}</span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#555", fontSize: "0.88rem" }}>
          <FiMapPin style={{ marginTop: "2px", color: "#c17b2a", flexShrink: 0 }} />
          <span>{event.location}</span>
        </div>

        {event.booth && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555", fontSize: "0.88rem" }}>
            <FiGrid style={{ color: "#c17b2a", flexShrink: 0 }} />
            <span>{event.booth}</span>
          </div>
        )}

        <div style={{ marginTop: "auto", paddingTop: "12px" }}>
          <button
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "9px 20px",
              borderRadius: "7px",
              border: "2px solid #c17b2a",
              background: "transparent",
              color: "#c17b2a",
              fontWeight: 700, fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#c17b2a"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c17b2a"; }}
          >
            {t('ui.enquireNow', 'Enquire Now')} <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Past Card ────────────────────────────────────────────────────────────────

function PastCard({ event, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: hovered ? "0 10px 32px rgba(0,0,0,0.12)" : "0 2px 10px rgba(0,0,0,0.06)",
        border: "1px solid #e8e0d5",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
          onError={(e) => { e.target.src = "/assets/BannerImages/HOMEPage.jpg"; }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
        }} />
      </div>

      {/* Body */}
      <div style={{ padding: "20px 20px 18px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
        <h3 style={{
          fontSize: "1.05rem", fontWeight: 700,
          lineHeight: 1.35,
          transition: "color 0.2s",
          color: hovered ? "#c17b2a" : "#1a1a1a",
        }}>
          {event.title}
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#777", fontSize: "0.82rem" }}>
          <FiCalendar style={{ color: "#c17b2a", flexShrink: 0, fontSize: "0.8rem" }} />
          <span>{event.date}</span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "7px", color: "#777", fontSize: "0.82rem" }}>
          <FiMapPin style={{ marginTop: "2px", color: "#c17b2a", flexShrink: 0, fontSize: "0.8rem" }} />
          <span>{event.location}</span>
        </div>

        {event.booth && (
          <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#777", fontSize: "0.82rem" }}>
            <FiGrid style={{ color: "#c17b2a", flexShrink: 0, fontSize: "0.8rem" }} />
            <span>{event.booth}</span>
          </div>
        )}

        {event.description && (
          <p style={{
            fontSize: "0.82rem", color: "#888", lineHeight: 1.55,
            marginTop: "4px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function EventModal({ event, onClose, t, navigate }) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        animation: "fadeIn 0.25s ease",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal Box */}
      <div
        className="modal-box"
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.28)",
          width: "100%",
          maxWidth: "860px",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column", // Default to column for mobile
          zIndex: 10,
          animation: "zoomIn 0.25s ease",
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .modal-box { flex-direction: row !important; }
            .modal-image-side { width: 42% !important; min-height: 480px !important; }
            .modal-content-side { padding: 48px !important; }
          }
        `}</style>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid #e0e0e0",
            borderRadius: "50%",
            width: "36px", height: "36px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", zIndex: 20,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          <FiX style={{ fontSize: "1rem" }} />
        </button>

        {/* Image Side */}
        <div className="modal-image-side" style={{ width: "100%", height: "200px", position: "relative", flexShrink: 0 }}>
          <img
            src={event.image}
            alt={event.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.src = "/assets/BannerImages/HOMEPage.jpg"; }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "20px",
          }}>
            <span style={{
              display: "inline-block",
              background: "#c17b2a",
              color: "#fff",
              fontSize: "0.65rem", fontWeight: 700,
              padding: "4px 12px", borderRadius: "20px",
              textTransform: "uppercase", letterSpacing: "0.08em",
              width: "fit-content",
            }}>
              {event.type === "Upcoming Event" ? t("sections.upcoming") : t("hero.title")}
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="modal-content-side" style={{ flex: 1, padding: "24px 20px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <h3 style={{ fontSize: "clamp(1.25rem, 4vw, 1.8rem)", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.25, marginBottom: "4px" }}>
              {event.title}
            </h3>
            {event.subtitle && (
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c17b2a", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {event.subtitle}
              </p>
            )}
          </div>

          {/* Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <InfoRow icon={<FiCalendar />} label={t("ui.eventDate")} value={event.date} />
            <InfoRow icon={<FiMapPin />} label={t("ui.location")} value={event.location} />
            {event.booth && <InfoRow icon={<FiGrid />} label={t("ui.boothNumber")} value={event.booth} />}
          </div>

          <div style={{ marginTop: "auto", display: "flex", gap: "10px", justifyContent: "flex-end", borderTop: "1px solid #f0ece6", paddingTop: "16px", flexWrap: "wrap" }}>
            <button
              onClick={onClose}
              style={{
                padding: "8px 20px", borderRadius: "8px",
                border: "2px solid #e0e0e0",
                background: "transparent", color: "#555",
                fontWeight: 700, cursor: "pointer",
                fontSize: "0.85rem",
                flex: event.type === "Upcoming Event" ? "1 1 100px" : "0 1 auto",
                minWidth: event.type === "Upcoming Event" ? "100px" : "140px"
              }}
            >
              {t("ui.close")}
            </button>
            {event.type === "Upcoming Event" && (
              <>
                <button
                  style={{
                    padding: "8px 20px", borderRadius: "8px",
                    border: "2px solid #25D366",
                    background: "#25D366", color: "#fff",
                    fontWeight: 700, cursor: "pointer",
                    fontSize: "0.85rem",
                    boxShadow: "0 4px 16px rgba(37,211,102,0.2)",
                    display: "flex", alignItems: "center", gap: "8px",
                    flex: "1 1 120px",
                    justifyContent: "center"
                  }}
                >
                  <FaWhatsapp style={{ fontSize: "1.1rem" }} />
                  WhatsApp
                </button>
                <button
                  onClick={() => {
                    onClose();
                    navigate("/contact#quote-form-section");
                  }}
                  style={{
                    padding: "8px 20px", borderRadius: "8px",
                    border: "2px solid #c17b2a",
                    background: "#c17b2a", color: "#fff",
                    fontWeight: 700, cursor: "pointer",
                    fontSize: "0.85rem",
                    boxShadow: "0 4px 16px rgba(193, 123, 42, 0.2)",
                    flex: "1 1 120px"
                  }}
                >
                  {t("ui.contactUs")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.94); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: "14px",
      background: "#f9f6f1", borderRadius: "10px",
      padding: "14px 16px", border: "1px solid #ede8e0",
    }}>
      <div style={{
        width: "38px", height: "38px", borderRadius: "8px",
        background: "#fff", border: "1px solid #ede8e0",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#c17b2a", fontSize: "1.1rem", flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#c17b2a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>
          {label}
        </p>
        <span style={{ fontSize: "1rem", fontWeight: 600, color: "#1a1a1a" }}>{value}</span>
      </div>
    </div>
  );
}
