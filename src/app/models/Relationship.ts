export enum RelationshipType {
	MARRIED = 'M'
}

export interface IRelationship {
	person1_id: number;
	person2_id: number;
	relationship_type: RelationshipType;
}

export class Relationship implements IRelationship {
	person1_id: number;
	person2_id: number;
	relationship_type: RelationshipType;

	constructor(obj: IRelationship) {
		this.person1_id = obj.person1_id;
		this.person2_id = obj.person2_id;
		this.relationship_type = obj.relationship_type;
	}
}