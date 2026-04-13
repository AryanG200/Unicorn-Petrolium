import React, { useEffect, useState } from "react";
import { FiX, FiMapPin, FiCalendar, FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

// ─── Data ────────────────────────────────────────────────────────────────────

// ─── Constants ─────────────────────────────────────────────────────────────
const UPCOMING_IDS = [
  { id: "u1", year: 2025, image: "/assets/BannerImages/ChemExpoExhibition.jpeg" },
  { id: "u2", year: 2025, image: "/assets/about/Advance production units.jpg" },
];

const PAST_IDS = [
  { id: "p1", year: 2024, image: "/assets/about/packaging.jpg" },
  { id: "p2", year: 2024, image: "/assets/about/r&d.jpg" },
  { id: "p3", year: 2024, image: "/assets/about/Advance production units.jpg" },
  { id: "p4", year: 2023, image: "/assets/about/r&d.jpg" },
  { id: "p5", year: 2023, image: "/assets/about/Artboard 1.jpg" },
  { id: "p6", year: 2023, image: "/assets/about/packaging.jpg" },
  { id: "p7", year: 2022, image: "/assets/about/Artboard 2.jpg" },
  { id: "p8", year: 2022, image: "/assets/about/Advance production units.jpg" },
  { id: "p9", year: 2022, image: "/assets/about/r&d.jpg" },
];

const ALL_YEARS = [2024, 2023, 2022];

// ─── Component ────────────────────────────────────────────────────────────────

export default function EventsPage() {
  const { t } = useTranslation("events");
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

      {/* ── Hero Banner ───────────────────────────────────────── */}
      <section style={{ position: "relative", width: "100%", height: "380px", overflow: "hidden" }}>
        <img
          src="/assets/BannerImages/exhibition desktop2.jpg"
          alt="Events"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          onError={(e) => { e.target.src = "/assets/BannerImages/HOMEPage.jpg"; }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <h1 style={{
            color: "#fff", fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 700, letterSpacing: "0.02em",
            textShadow: "0 2px 16px rgba(0,0,0,0.35)",
          }}>
            {t("hero.title")}
          </h1>
        </div>
      </section>

      {/* ── Upcoming Events ───────────────────────────────────── */}
      <section style={{ background: "#f9f6f1", padding: "60px 0 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{
            fontSize: "clamp(1.3rem, 3vw, 1.75rem)", fontWeight: 700,
            color: "#1a1a1a", marginBottom: "32px",
          }}>
            {t("sections.upcoming")}
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px",
          }}>
            {upcomingEvents.map((event) => (
              <UpcomingCard key={event.id} event={event} t={t} onClick={() => handleEventClick({ ...event, type: "Upcoming Event" })} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Events ───────────────────────────────────────── */}
      <section style={{ background: "#f9f6f1", padding: "48px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          {/* Year Filter Pills */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }}>
            {ALL_YEARS.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                style={{
                  padding: "8px 24px",
                  borderRadius: "6px",
                  border: selectedYear === year ? "2px solid #c17b2a" : "2px solid #c8b99a",
                  background: selectedYear === year ? "#c17b2a" : "transparent",
                  color: selectedYear === year ? "#fff" : "#7a6a52",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.02em",
                }}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}>
            {filteredPastEvents.map((event) => (
              <PastCard key={event.id} event={event} onClick={() => handleEventClick({ ...event, type: "Past Event" })} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────── */}
      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} t={t} />
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
          background: "#006633",
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

        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#555", fontSize: "0.88rem" }}>
          <FiMapPin style={{ marginTop: "2px", color: "#c17b2a", flexShrink: 0 }} />
          <span>{event.location}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555", fontSize: "0.88rem" }}>
          <FiCalendar style={{ color: "#c17b2a", flexShrink: 0 }} />
          <span>{event.date}</span>
        </div>

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

        <div style={{ display: "flex", alignItems: "flex-start", gap: "7px", color: "#777", fontSize: "0.82rem" }}>
          <FiMapPin style={{ marginTop: "2px", color: "#c17b2a", flexShrink: 0, fontSize: "0.8rem" }} />
          <span>{event.location}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#777", fontSize: "0.82rem" }}>
          <FiCalendar style={{ color: "#c17b2a", flexShrink: 0, fontSize: "0.8rem" }} />
          <span>{event.date}</span>
        </div>

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

function EventModal({ event, onClose, t }) {
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
      <div style={{
        position: "relative",
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 32px 80px rgba(0,0,0,0.28)",
        width: "100%",
        maxWidth: "860px",
        maxHeight: "90vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        zIndex: 10,
        animation: "zoomIn 0.25s ease",
      }}>
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
        <div style={{ width: "42%", minHeight: "360px", position: "relative", flexShrink: 0 }}>
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
            padding: "24px",
          }}>
            <span style={{
              display: "inline-block",
              background: event.type === "Upcoming Event" ? "#006633" : "#c17b2a",
              color: "#fff",
              fontSize: "0.7rem", fontWeight: 700,
              padding: "5px 14px", borderRadius: "20px",
              textTransform: "uppercase", letterSpacing: "0.08em",
              width: "fit-content",
            }}>
              {event.type === "Upcoming Event" ? t("sections.upcoming") : t("hero.title")}
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div style={{ flex: 1, padding: "36px 32px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.25, marginBottom: "6px" }}>
              {event.title}
            </h3>
            {event.subtitle && (
              <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#c17b2a", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {event.subtitle}
              </p>
            )}
          </div>

          {/* Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <InfoRow icon={<FiCalendar />} label={t("ui.eventDate")} value={event.date} />
            <InfoRow icon={<FiMapPin />} label={t("ui.location")} value={event.location} />
          </div>

          {/* About */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
              {t("ui.aboutEvent")}
            </h4>
            <p style={{ fontSize: "0.92rem", color: "#666", lineHeight: 1.7 }}>
              {event.description ||
                `${t("ui.joinUsAt")} ${event.title} ${t("ui.discoverDesc")}`}
            </p>
          </div>

          {}
          <div style={{ marginTop: "auto", display: "flex", gap: "12px", justifyContent: "flex-end", borderTop: "1px solid #f0ece6", paddingTop: "20px" }}>
            <button
              onClick={onClose}
              style={{
                padding: "10px 24px", borderRadius: "8px",
                border: "2px solid #e0e0e0",
                background: "transparent", color: "#555",
                fontWeight: 700, cursor: "pointer",
                fontSize: "0.88rem",
              }}
            >
              {t("ui.close")}
            </button>
            <button
              onClick={onClose}
              style={{
                padding: "10px 24px", borderRadius: "8px",
                border: "2px solid #006633",
                background: "#006633", color: "#fff",
                fontWeight: 700, cursor: "pointer",
                fontSize: "0.88rem",
                boxShadow: "0 4px 16px rgba(0,102,51,0.2)",
              }}
            >
              {t("ui.contactUs")}
            </button>
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
        <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#006633", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>
          {label}
        </p>
        <span style={{ fontSize: "1rem", fontWeight: 600, color: "#1a1a1a" }}>{value}</span>
      </div>
    </div>
  );
}
