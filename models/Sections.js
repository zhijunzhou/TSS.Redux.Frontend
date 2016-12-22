export default class Section {
    constructor(name, title, path, hideFromNav, outlines) {
        this.name = name
        this.title = title
        this.path = path
        this.hideFromNav = hideFromNav
        this.outlines = outlines
    }
}

export const generateSections = () => {
    return {
        "0201": {
            "title": "Opportunity Description",
            "fullTitle": "Opportunity Description",
            "name": "opportunity-data",
            "path": "opptyOverview.opptyData",
            'hideFromNav': false
        },
        "0202": {
            "title": "Pursuit Team Contacts",
            "fullTitle": "Pursuit Team Contacts",
            "name": "contacts",
            "path": "opptyOverview.contact",
            'hideFromNav': false
        },
        "0203": {
            "title": "Key Dates",
            "fullTitle": "Key Dates",
            "name": "key-dates",
            "path": "opptyOverview.keyDate",
            'hideFromNav': false
        },
        "0204": {
            "title": "Client and Pursuit Context",
            "fullTitle": "Client and Pursuit Context",
            "name": "client-overview",
            "path": "opptyOverview.clientPursuitContext",
            'hideFromNav': false
        },
        "0205": {
            "title": "Scope",
            "fullTitle": "Scope",
            "name": "all-offerings",
            "path": "opptyOverview.scope",
            'hideFromNav': false
        },
        "0206": {
            "title": "Validator-Approver Assignment",
            "fullTitle": "Validator-Approver Assignment",
            "name": "delivery-resource-assignment",
            "path": "opptyOverview.deliveryResourceAssignment",
            'hideFromNav': false
        },
        "0207": {
            "title": "Delivery SME Contributor Assignment",
            "fullTitle": "Delivery SME Contributor Assignment",
            "name": "sme-contributor-assignment",
            "path": "opptyOverview.smeContributorAssignment",
            'hideFromNav': false
        },
        "030101": {
            "title": "Sales Strategy",
            "fullTitle": "Sales Strategy",
            "name": "sales-approach",
            "path": "solnStrategy.considerations.salesApproach",
            'hideFromNav': false
        },
        "030102": {
            "title": "Pricing Approach",
            "fullTitle": "Pricing Approach",
            "name": "pricing-approach",
            "path": "solnStrategy.considerations.pricingApproach",
            'hideFromNav': false
        },
        "030103": {
            "title": "Competitors",
            "fullTitle": "Competitors",
            "name": "competitors",
            "path": "solnStrategy.considerations.competitors",
            'hideFromNav': false
        },
        "030104": {
            "title": "Message Map-Client Business Outcomes",
            "fullTitle": "Message Map-Client Business Outcomes",
            "name": "map-value-propositions",
            "path": "solnStrategy.considerations.mapValProps",
            'hideFromNav': false
        },
        "030105": {
            "title": "Client Decision Factors",
            "fullTitle": "Client Decision Factors",
            "name": "decision-factors",
            "path": "solnStrategy.considerations.decisionFactors",
            'hideFromNav': false
        },
        "030106": {
            "title": "Resource Requirements",
            "fullTitle": "Resource Requirements",
            "name": "resource-requirements",
            "path": "solnStrategy.considerations.resourceRequirements",
            'hideFromNav': false
        },
        "030107": {
            "title": "Other Solution Parameters",
            "fullTitle": "Other Solution Parameters",
            "name": "other-solution-params",
            "path": "solnStrategy.considerations.otherSolnParams",
            'hideFromNav': false
        },
        "030108": {
            "title": "Design Considerations Summary",
            "fullTitle": "Design Considerations Summary",
            "name": "considerations-summary",
            "path": "solnStrategy.considerations.considerationsSummary",
            'hideFromNav': false
        },
        "0302": {
            "title": "Solution on a Page (SOAP)",
            "fullTitle": "Solution on a Page (SOAP)",
            "name": "soap",
            "path": "solnStrategy.soap",
            'hideFromNav': false
        },
        "030301": {
            "title": "Transformation Framework",
            "fullTitle": "Transformation Framework",
            "name": "pursuit-transformation-strategy",
            "path": "solnStrategy.transformationStrategy.pursuitTransformationStrategy",
            'hideFromNav': false
        },
        "030302": {
            "title": "Transformation Themes",
            "fullTitle": "Transformation Themes",
            "name": "transformation-strategy-theme",
            "path": "solnStrategy.transformationStrategy.transformationStrategyTheme",
            'hideFromNav': false
        },
        "030303": {
            "title": "Transformation Summary",
            "fullTitle": "Transformation Summary",
            "name": "transformation-summary",
            "path": "solnStrategy.transformationStrategy.transformationSummary",
            'hideFromNav': false
        },
        "030401": {
            "title": "Business Solution Mapping",
            "fullTitle": "Business Solution Mapping",
            "name": "biz-soln-mapping",
            "path": "solnStrategy.designConsiderationsMapping.businessSolutionMapping",
            'hideFromNav': false
        },
        "030402": {
            "title": "Technical & Services Solution Mapping",
            "fullTitle": "Technical & Services Solution Mapping",
            "name": "tech-svc-soln-mapping",
            "path": "solnStrategy.designConsiderationsMapping.techSvcSolutionMapping",
            'hideFromNav': false
        },
        "0401": {
            "title": "Business Solution",
            "fullTitle": "Business Solution",
            "name": "biz-soln",
            "path": "solnDesign.bizSoln",
            'hideFromNav': false
        },
        "040101": {
            "title": "High-Level Solution Business Summary",
            "fullTitle": "High-Level Solution Business Summary",
            "name": "hl-soln-biz-summary",
            "path": "solnDesign.hlsBizSummary",
            'hideFromNav': false
        },
        "040201": {
            "title": "Client Current Architecture",
            "fullTitle": "Client Current Architecture",
            "name": "client-architecture",
            "path": "solnDesign.techSoln.clientArch",
            'hideFromNav': false
        },
        "040202": {
            "title": "High-Level Solution Technical Summary",
            "fullTitle": "High-Level Solution Technical Summary",
            "name": "tech-soln-summary",
            "path": "solnDesign.techSoln.techSolnSummary",
            'hideFromNav': false
        },
        "040205": {
            "title": "Design Inputs",
            "fullTitle": "Design Inputs",
            "name": "design-inputs",
            "path": "solnDesign.techSoln.designInputs",
            'hideFromNav': false
        },
        "040309": {
            "title": "High-Level Solution Services Summary",
            "fullTitle": "High-Level Solution Services Summary",
            "name": "svc-soln-summary",
            "path": "solnDesign.svcSoln.svcSolnSummary",
            'hideFromNav': false
        },
        "040301": {
            "title": "SLAs/SLOs/KPIs",
            "fullTitle": "SLAs/SLOs/KPIs",
            "name": "slas-slos-kpis",
            "path": "solnDesign.svcSoln.slasSlosKpis",
            'hideFromNav': false
        },
        "040302": {
            "title": "Location Sourcing Targets",
            "fullTitle": "Service and Hardware Location Sourcing Targets",
            "name": "location-targets",
            "path": "solnDesign.svcSoln.locationTarget",
            'hideFromNav': false
        },
        "040303": {
            "title": "Delivery Responsibilities",
            "fullTitle": "In-Scope Services Delivery Responsibility",
            "name": "service-delivery-responsibilities",
            "path": "solnDesign.svcSoln.svcDeliveryResp",
            'hideFromNav': false
        },
        "040304": {
            "title": "Client-Retained Services",
            "fullTitle": "Client-Retained Services Delivery Responsibility",
            "name": "client-retained-responsibilities",
            "path": "solnDesign.svcSoln.clientRetainedResp",
            'hideFromNav': false
        },
        "040307": {
            "title": "Key Deliverables and Milestones",
            "fullTitle": "Key Deliverables and Milestones (Projects Only)",
            "name": "key-deliverables-milestones",
            "path": "solnDesign.svcSoln.keyDeliverablesMilestones",
            'hideFromNav': false
        },
        "040308": {
            "title": "Effort Estimation",
            "fullTitle": "Effort Estimation (Projects Only)",
            "name": "effort-estimation",
            "path": "solnDesign.svcSoln.effortEstimation",
            'hideFromNav': false
        },
        "040501": {
            "title": "Themes and Projects",
            "fullTitle": "Themes and Projects",
            "name": "themes-and-projects",
            "path": "solnDesign.transformationProgram.themesAndProjects",
            'hideFromNav': false
        },
        "040502": {
            "title": "Objectives and Projects",
            "fullTitle": "Objectives and Projects",
            "name": "objectives-and-projects",
            "path": "solnDesign.transformationProgram.objectivesAndProjects",
            'hideFromNav': false
        },
        "040503": {
            "title": "Project Descriptions",
            "fullTitle": "Project Descriptions",
            "name": "project-descriptions",
            "path": "solnDesign.transformationProgram.projectDescription",
            'hideFromNav': false
        },
        "040504": {
            "title": "Key Project Artifacts",
            "fullTitle": "Key Project Artifacts",
            "name": "key-project-timeline",
            "path": "solnDesign.transformationProgram.keyProjectTimeline",
            'hideFromNav': false
        },
        "040401": {
            "title": "HLS End-to-End Summary",
            "fullTitle": "HLS End-to-End Summary",
            "name": "summary",
            "path": "solnDesign.designSummaries.designSummariesOverview",
            'hideFromNav': false
        },
        "040402": {
            "title": "Outsourcing CMO/TMO/FMO",
            "fullTitle": "Outsourcing CMO/TMO/FMO",
            "name": "xmo",
            "path": "solnDesign.designSummaries.xmo",
            'hideFromNav': false
        },
        "040203": {
            "title": "HPE Requirements",
            "fullTitle": "HPE Requirements",
            "name": "company-requirements",
            "path": "solnDesign.techSoln.cmpyRequirements",
            'hideFromNav': false
        },
        "040403": {
            "title": "Costing Approach",
            "fullTitle": "Costing Approach",
            "name": "costing-approach",
            "path": "solnDesign.designSummaries.costingApproach",
            'hideFromNav': false
        },
        "04040401": {
            "title": "FTE and Costing Summaries",
            "fullTitle": "FTE and Costing Summaries",
            "name": "fte-costing-summaries",
            "path": "solnDesign.designSummaries.fteCostingSummaries.overview",
            'hideFromNav': false
        },
        "04040402": {
            "title": "Total Cost Summary by Year",
            "fullTitle": "Total Cost Summary by Year",
            "name": "na",
            "path": "na",
            'hideFromNav': true
        },
        "04040403": {
            "title": "FTE Costs by Location",
            "fullTitle": "FTE Costs by Location",
            "name": "na",
            "path": "na",
            'hideFromNav': true
        },
        "04040404": {
            "title": "FTE Counts by Service, Location",
            "fullTitle": "FTE Counts by Service, Location",
            "name": "na",
            "path": "na",
            'hideFromNav': true
        },
        "04040405": {
            "title": "FTE Counts by Resource Category",
            "fullTitle": "FTE Counts by Resource Category",
            "name": "na",
            "path": "na",
            'hideFromNav': true
        },
        "04040406": {
            "title": "FTE Costs by Service",
            "fullTitle": "FTE Costs by Service",
            "name": "na",
            "path": "na",
            'hideFromNav': true
        },
        "04040407": {
            "title": "FTE Costs by Projects-Run",
            "fullTitle": "FTE Costs by Projects-Run",
            "name": "na",
            "path": "na",
            'hideFromNav': true
        },
        "040204": {
            "title": "Solution Blueprint",
            "fullTitle": "Solution Blueprint",
            "name": "soln-blueprint",
            "path": "solnDesign.techSoln.solnBlueprint",
            'hideFromNav': false
        },
        "0501": {
            "title": "Key Assumptions",
            "fullTitle": "Key Assumptions",
            "name": "key-assumptions",
            "path": "riskAssumptionMitigation.keyAssumptions",
            'hideFromNav': false
        },
        "0502": {
            "title": "Key Delivery Risks",
            "fullTitle": "Key Delivery Risks",
            "name": "key-delivery-risks",
            "path": "riskAssumptionMitigation.keyDeliveryRisks",
            'hideFromNav': false
        },
        "0503": {
            "title": "Key Non-Delivery Risks",
            "fullTitle": "Key Non-Delivery Risks",
            "name": "key-non-delivery-risks",
            "path": "riskAssumptionMitigation.keyNonDeliveryRisks",
            'hideFromNav': false
        },
        "0601": {
            "title": "Required Documents",
            "fullTitle": "Required Documents",
            "name": "required-documents",
            "path": "requiredDoc.doc",
            'hideFromNav': false
        },
        "0701": {
            "title": "Design Decisions Change Log",
            "fullTitle": "Design Decisions Change Log",
            "name": "decisions-change-summary",
            "path": "handoverToDelivery.changeSummary",
            'hideFromNav': false
        },
        "0702": {
            "title": "Glossary",
            "fullTitle": "Glossary",
            "name": "glossary",
            "path": "handoverToDelivery.glossary",
            'hideFromNav': false
        },
    }
}