"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../components/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user]);

  if (loading || !user)
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-light)",
          borderRadius: 16,
          margin: "40px auto",
          maxWidth: 400,
          boxShadow: "0 4px 24px rgba(41,50,65,0.08)",
          border: "1px solid var(--color-accent)",
          padding: 32,
        }}
      >
        <div
          style={{
            marginBottom: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              border: "5px solid var(--color-accent)",
              borderTop: "5px solid var(--color-primary)",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: 16,
            }}
          />
          <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
          <div
            style={{
              color: "var(--color-primary)",
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 4,
            }}
          >
            Loading...
          </div>
          <div
            style={{
              color: "var(--color-dark)",
              fontSize: 16,
            }}
          >
            Please wait while we verify your access.
          </div>
        </div>
      </div>
    );

  return <>{children}</>;
};

export default ProtectedRoute;
