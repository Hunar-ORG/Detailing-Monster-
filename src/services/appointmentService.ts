import type { AppointmentFormData } from '../types';

export interface AppointmentSubmissionResult {
  success: boolean;
  message: string;
  referenceId?: string;
}

/**
 * Appointment service abstraction layer.
 * Currently provides a typed mock implementation with network latency simulation.
 * Easily swappable with a real backend/REST API endpoint.
 */
export const appointmentService = {
  async submit(data: AppointmentFormData): Promise<AppointmentSubmissionResult> {
    // Simulate real network latency (600ms)
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Basic server-side simulation guard
    if (!data.fullName || !data.email || !data.phone || !data.vehicleModel) {
      throw new Error('Incomplete booking request received.');
    }

    const referenceId = `DM-${Math.floor(100000 + Math.random() * 900000)}`;

    return {
      success: true,
      message: 'Appointment request received successfully.',
      referenceId,
    };
  },
};
