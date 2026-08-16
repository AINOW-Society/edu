(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['data/data-situations'] = AINOW['data/data-situations'] || {};
// AINOW Situations — Real-Life Scenario Intelligence Engine
// 8 guided prompt generators for professional real-world situations.
// Each situation walks the user through consultant-style questions and generates expert prompt packages.

const SITUATION_CATEGORIES = [
    { id: 'all',            labelKey: 'situations.cats.all',            color: 'slate' },
    { id: 'leadership',     labelKey: 'situations.cats.leadership',     color: 'indigo' },
    { id: 'business',       labelKey: 'situations.cats.business',       color: 'blue' },
    { id: 'communication',  labelKey: 'situations.cats.communication',  color: 'emerald' },
    { id: 'career',         labelKey: 'situations.cats.career',         color: 'amber' },
    { id: 'productivity',   labelKey: 'situations.cats.productivity',   color: 'orange' },
];

const SITUATIONS = [
    {
        id: 'difficult_conversation',
        category: 'leadership',
        icon: 'MessageSquare',
        color: 'indigo',
        titleKey: 'situations.difficult_conversation.title',
        descKey:  'situations.difficult_conversation.desc',
        questions: [
            {
                id: 'who',
                type: 'select',
                labelKey: 'situations.difficult_conversation.who_label',
                options: ['direct_report', 'peer', 'manager', 'client'],
            },
            {
                id: 'history',
                type: 'select',
                labelKey: 'situations.difficult_conversation.history_label',
                options: ['positive', 'neutral', 'strained', 'long_standing'],
            },
            {
                id: 'issue',
                type: 'textarea',
                labelKey:        'situations.difficult_conversation.issue_label',
                placeholderKey:  'situations.difficult_conversation.issue_ph',
            },
            {
                id: 'goal',
                type: 'text',
                labelKey:        'situations.difficult_conversation.goal_label',
                placeholderKey:  'situations.difficult_conversation.goal_ph',
            },
            {
                id: 'style',
                type: 'select',
                labelKey: 'situations.difficult_conversation.style_label',
                options: ['direct', 'empathetic', 'diplomatic', 'assertive'],
            },
        ],
    },
    {
        id: 'write_proposal',
        category: 'business',
        icon: 'FileText',
        color: 'blue',
        titleKey: 'situations.write_proposal.title',
        descKey:  'situations.write_proposal.desc',
        questions: [
            {
                id: 'client_type',
                type: 'select',
                labelKey: 'situations.write_proposal.client_type_label',
                options: ['internal_team', 'external_client', 'government', 'nonprofit'],
            },
            {
                id: 'relationship',
                type: 'select',
                labelKey: 'situations.write_proposal.relationship_label',
                options: ['new_client', 'existing_client', 'returning_client', 'competitive_bid'],
            },
            {
                id: 'problem',
                type: 'textarea',
                labelKey:        'situations.write_proposal.problem_label',
                placeholderKey:  'situations.write_proposal.problem_ph',
            },
            {
                id: 'solution',
                type: 'textarea',
                labelKey:        'situations.write_proposal.solution_label',
                placeholderKey:  'situations.write_proposal.solution_ph',
            },
            {
                id: 'budget',
                type: 'text',
                labelKey:        'situations.write_proposal.budget_label',
                placeholderKey:  'situations.write_proposal.budget_ph',
            },
            {
                id: 'decision_timeline',
                type: 'select',
                labelKey: 'situations.write_proposal.decision_timeline_label',
                options: ['urgent', 'standard', 'exploratory', 'competitive'],
            },
        ],
    },
    {
        id: 'client_pitch',
        category: 'business',
        icon: 'TrendingUp',
        color: 'sky',
        titleKey: 'situations.client_pitch.title',
        descKey:  'situations.client_pitch.desc',
        questions: [
            {
                id: 'service',
                type: 'text',
                labelKey:        'situations.client_pitch.service_label',
                placeholderKey:  'situations.client_pitch.service_ph',
            },
            {
                id: 'prospect',
                type: 'select',
                labelKey: 'situations.client_pitch.prospect_label',
                options: ['startup', 'sme', 'enterprise', 'government', 'nonprofit'],
            },
            {
                id: 'pitch_stage',
                type: 'select',
                labelKey: 'situations.client_pitch.pitch_stage_label',
                options: ['cold', 'warm', 'follow_up', 'final'],
            },
            {
                id: 'main_benefit',
                type: 'text',
                labelKey:        'situations.client_pitch.benefit_label',
                placeholderKey:  'situations.client_pitch.benefit_ph',
            },
            {
                id: 'objection',
                type: 'text',
                labelKey:        'situations.client_pitch.objection_label',
                placeholderKey:  'situations.client_pitch.objection_ph',
            },
        ],
    },
    {
        id: 'handle_complaint',
        category: 'communication',
        icon: 'AlertCircle',
        color: 'rose',
        titleKey: 'situations.handle_complaint.title',
        descKey:  'situations.handle_complaint.desc',
        questions: [
            {
                id: 'complainer',
                type: 'select',
                labelKey: 'situations.handle_complaint.complainer_label',
                options: ['customer', 'employee', 'partner', 'colleague'],
            },
            {
                id: 'complaint',
                type: 'textarea',
                labelKey:        'situations.handle_complaint.complaint_label',
                placeholderKey:  'situations.handle_complaint.complaint_ph',
            },
            {
                id: 'what_happened',
                type: 'textarea',
                labelKey:        'situations.handle_complaint.what_happened_label',
                placeholderKey:  'situations.handle_complaint.what_happened_ph',
            },
            {
                id: 'resolution_power',
                type: 'select',
                labelKey: 'situations.handle_complaint.resolution_power_label',
                options: ['full', 'partial', 'none'],
            },
            {
                id: 'channel',
                type: 'select',
                labelKey: 'situations.handle_complaint.channel_label',
                options: ['in_person', 'email', 'phone', 'formal_letter'],
            },
        ],
    },
    {
        id: 'job_application',
        category: 'career',
        icon: 'Briefcase',
        color: 'amber',
        titleKey: 'situations.job_application.title',
        descKey:  'situations.job_application.desc',
        questions: [
            {
                id: 'role',
                type: 'text',
                labelKey:        'situations.job_application.role_label',
                placeholderKey:  'situations.job_application.role_ph',
            },
            {
                id: 'company',
                type: 'text',
                labelKey:        'situations.job_application.company_label',
                placeholderKey:  'situations.job_application.company_ph',
            },
            {
                id: 'application_stage',
                type: 'select',
                labelKey: 'situations.job_application.application_stage_label',
                options: ['cv_resume', 'cover_letter', 'interview_prep', 'salary_nego'],
            },
            {
                id: 'background',
                type: 'textarea',
                labelKey:        'situations.job_application.background_label',
                placeholderKey:  'situations.job_application.background_ph',
            },
            {
                id: 'highlight',
                type: 'select',
                labelKey: 'situations.job_application.highlight_label',
                options: ['achievements', 'skills', 'culture_fit', 'growth', 'salary'],
            },
            {
                id: 'concern',
                type: 'text',
                labelKey:       'situations.job_application.concern_label',
                placeholderKey: 'situations.job_application.concern_ph',
            },
        ],
    },
    {
        id: 'team_conflict',
        category: 'leadership',
        icon: 'Users',
        color: 'violet',
        titleKey: 'situations.team_conflict.title',
        descKey:  'situations.team_conflict.desc',
        questions: [
            {
                id: 'conflict_type',
                type: 'select',
                labelKey: 'situations.team_conflict.conflict_type_label',
                options: ['values', 'workstyle', 'resources', 'personality', 'performance'],
            },
            {
                id: 'conflict_duration',
                type: 'select',
                labelKey: 'situations.team_conflict.conflict_duration_label',
                options: ['just_started', 'few_weeks', 'months', 'long_standing'],
            },
            {
                id: 'parties',
                type: 'text',
                labelKey:        'situations.team_conflict.parties_label',
                placeholderKey:  'situations.team_conflict.parties_ph',
            },
            {
                id: 'core_issue',
                type: 'textarea',
                labelKey:        'situations.team_conflict.core_issue_label',
                placeholderKey:  'situations.team_conflict.core_issue_ph',
            },
            {
                id: 'your_role',
                type: 'select',
                labelKey: 'situations.team_conflict.your_role_label',
                options: ['manager', 'peer', 'stakeholder', 'hr'],
            },
        ],
    },
    {
        id: 'negotiation',
        category: 'business',
        icon: 'Handshake',
        color: 'teal',
        titleKey: 'situations.negotiation.title',
        descKey:  'situations.negotiation.desc',
        questions: [
            {
                id: 'neg_type',
                type: 'select',
                labelKey: 'situations.negotiation.neg_type_label',
                options: ['salary', 'contract', 'partnership', 'resources', 'vendor'],
            },
            {
                id: 'relationship',
                type: 'select',
                labelKey: 'situations.negotiation.relationship_label',
                options: ['new_contact', 'ongoing', 'internal', 'difficult'],
            },
            {
                id: 'what_you_want',
                type: 'text',
                labelKey:        'situations.negotiation.want_label',
                placeholderKey:  'situations.negotiation.want_ph',
            },
            {
                id: 'their_goal',
                type: 'text',
                labelKey:       'situations.negotiation.their_goal_label',
                placeholderKey: 'situations.negotiation.their_goal_ph',
            },
            {
                id: 'leverage',
                type: 'textarea',
                labelKey:        'situations.negotiation.leverage_label',
                placeholderKey:  'situations.negotiation.leverage_ph',
            },
            {
                id: 'bottom_line',
                type: 'text',
                labelKey:        'situations.negotiation.bottom_line_label',
                placeholderKey:  'situations.negotiation.bottom_line_ph',
            },
            {
                id: 'deadline',
                type: 'text',
                labelKey:       'situations.negotiation.deadline_label',
                placeholderKey: 'situations.negotiation.deadline_ph',
            },
        ],
    },
    {
        id: 'daily_planning',
        category: 'productivity',
        icon: 'CalendarCheck',
        color: 'orange',
        titleKey: 'situations.daily_planning.title',
        descKey:  'situations.daily_planning.desc',
        questions: [
            {
                id: 'top_goal',
                type: 'text',
                labelKey:        'situations.daily_planning.top_goal_label',
                placeholderKey:  'situations.daily_planning.top_goal_ph',
            },
            {
                id: 'tasks',
                type: 'textarea',
                labelKey:       'situations.daily_planning.tasks_label',
                placeholderKey: 'situations.daily_planning.tasks_ph',
            },
            {
                id: 'constraints',
                type: 'text',
                labelKey:        'situations.daily_planning.constraints_label',
                placeholderKey:  'situations.daily_planning.constraints_ph',
            },
            {
                id: 'blockers',
                type: 'text',
                labelKey:        'situations.daily_planning.blockers_label',
                placeholderKey:  'situations.daily_planning.blockers_ph',
            },
            {
                id: 'role',
                type: 'text',
                labelKey:       'situations.daily_planning.role_label',
                placeholderKey: 'situations.daily_planning.role_ph',
            },
            {
                id: 'work_style',
                type: 'select',
                labelKey: 'situations.daily_planning.work_style_label',
                options: ['deep_work', 'meetings_heavy', 'mixed', 'crisis_mode'],
            },
            {
                id: 'energy_level',
                type: 'select',
                labelKey: 'situations.daily_planning.energy_level_label',
                options: ['high', 'medium', 'low', 'variable'],
            },
        ],
    },
];
  __exports.SITUATION_CATEGORIES = SITUATION_CATEGORIES;
  __exports.SITUATIONS = SITUATIONS;
})();