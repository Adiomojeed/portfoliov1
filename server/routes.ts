import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple API endpoint for contact form (message data is not stored)
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // In a real app, you would send an email or store the message
    // This is just a demonstration endpoint
    
    return res.status(200).json({ 
      success: true, 
      message: "Message received successfully!" 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
